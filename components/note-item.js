class NoteItem extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'body', 'created-at'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'No Title';
    const body = this.getAttribute('body') || 'No Body';
    const createdAt = this.getAttribute('created-at') || new Date().toISOString();

    const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    this.innerHTML = `
      <article class="note-item">
        <h3 class="note-title">${title}</h3>
        <p class="note-date">${formattedDate}</p>
        <p class="note-body">${body}</p>
      </article>
    `;
  }
}

customElements.define('note-item', NoteItem);