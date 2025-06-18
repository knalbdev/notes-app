import './components/app-bar.js';
import './components/note-form.js';
import './components/note-item.js';

import { notesData } from './data/notes.js';

const renderNotes = (notes) => {
  const notesListElement = document.getElementById('notesList');
  notesListElement.innerHTML = ''; 

  notes.forEach(note => {
    const noteItem = document.createElement('note-item');
    
    noteItem.setAttribute('title', note.title);
    noteItem.setAttribute('body', note.body);
    noteItem.setAttribute('created-at', note.createdAt);
    
    notesListElement.appendChild(noteItem);
  });
};

const addNote = (event) => {
  event.preventDefault(); 

  const titleInput = document.getElementById('noteTitle');
  const bodyInput = document.getElementById('noteBody');
  
  if (!titleInput.value || !bodyInput.value) {
    alert('Both title and body are required!');
    return;
  }
  
  const newNote = {
    id: `notes-${Date.now()}`,
    title: titleInput.value,
    body: bodyInput.value,
    createdAt: new Date().toISOString(),
    archived: false,
  };

  notesData.unshift(newNote);

  renderNotes(notesData);

  event.target.reset();
};


document.addEventListener('DOMContentLoaded', () => {
  renderNotes(notesData);

  const addNoteForm = document.getElementById('addNoteForm');
  addNoteForm.addEventListener('submit', addNote);
});