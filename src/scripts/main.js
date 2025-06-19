import '../style.css';
import './components/app-bar.js';
import './components/note-form.js';
import './components/note-item.js';
import './components/loading-indicator.js';
import { getNotes, createNote, deleteNote } from './api.js';

const main = () => {
  const notesListElement = document.getElementById('notesList');
  const noteFormElement = document.querySelector('note-form');
  const loadingElement = document.querySelector('loading-indicator');

  const showLoading = () => loadingElement.style.display = 'block';
  const hideLoading = () => loadingElement.style.display = 'none';

  const showAlert = (message) => alert(message);

  const renderNotes = (notes) => {
    notesListElement.innerHTML = '';
    if (notes.length === 0) {
        notesListElement.innerHTML = '<p class="notes-empty">Note is empty.</p>';
        return;
    }
    notes.forEach(note => {
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('note-id', note.id);
      noteItem.setAttribute('title', note.title);
      noteItem.setAttribute('body', note.body);
      noteItem.setAttribute('created-at', note.createdAt);
      notesListElement.appendChild(noteItem);
    });
  };

  const loadNotes = async () => {
    showLoading();
    try {
      const notes = await getNotes();
      renderNotes(notes);
    } catch (error) {
      showAlert(`Gagal memuat catatan: ${error}`);
    } finally {
      hideLoading();
    }
  };

  const handleAddNote = async (event) => {
    event.preventDefault();
    const title = event.target.noteTitle.value;
    const body = event.target.noteBody.value;
    
    showLoading();
    try {
      await createNote({ title, body });
      event.target.reset();
      loadNotes();
    } catch (error) {
      showAlert(`Gagal menambah catatan: ${error}`);
    } finally {
      hideLoading();
    }
  };

  const handleDeleteNote = async (event) => {
    const noteId = event.detail.noteId;
    const confirmation = confirm(`Anda yakin ingin menghapus catatan ini?`);
    if (confirmation) {
      showLoading();
      try {
        await deleteNote(noteId);
        loadNotes();
      } catch (error) {
        showAlert(`Gagal menghapus catatan: ${error}`);
      } finally {
        hideLoading();
      }
    }
  };

  noteFormElement.addEventListener('submit', handleAddNote);
  document.addEventListener('delete-note', handleDeleteNote);

  loadNotes();
};

document.addEventListener('DOMContentLoaded', main);
