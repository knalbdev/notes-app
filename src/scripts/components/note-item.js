class NoteItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const noteId = this.getAttribute('note-id');
    const title = this.getAttribute('title') || 'No Title';
    const body = this.getAttribute('body') || 'No Body';
    const createdAt = this.getAttribute('created-at') || new Date().toISOString();

    const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    this.innerHTML = `
      <article class="note-item" data-id="${noteId}">
        <div class="note-item__content">
            <h3 class="note-title">${title}</h3>
            <p class="note-date">${formattedDate}</p>
            <p class="note-body">${body}</p>
        </div>
        <div class="note-item__actions">
            <button class="btn-delete" aria-label="Hapus catatan">Hapus</button>
        </div>
      </article>
    `;

    this.querySelector('.btn-delete').addEventListener('click', (event) => {
      event.stopPropagation();

      this.dispatchEvent(new CustomEvent('delete-note', {
        detail: { noteId: noteId },
        bubbles: true, 
      }));
    });
  }
}

customElements.define('note-item', NoteItem);
