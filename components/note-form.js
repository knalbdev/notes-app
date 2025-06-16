class NoteForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="form-container">
        <h2>Add a New Note</h2>
        <form id="addNoteForm">
          <div class="form-group">
            <input type="text" id="noteTitle" name="noteTitle" placeholder="Note title..." required>
            <p id="titleValidation" class="validation-message" aria-live="polite"></p>
          </div>
          <div class="form-group">
            <textarea id="noteBody" name="noteBody" rows="5" placeholder="Your note here..." required></textarea>
            <p id="bodyValidation" class="validation-message" aria-live="polite"></p>
          </div>
          <button type="submit" class="btn-submit">Add Note</button>
        </form>
      </div>
    `;

    const titleInput = this.querySelector('#noteTitle');
    const bodyInput = this.querySelector('#noteBody');
    const titleValidation = this.querySelector('#titleValidation');
    const bodyValidation = this.querySelector('#bodyValidation');

    titleInput.addEventListener('input', () => {
      if (titleInput.validity.valueMissing) {
        titleValidation.textContent = 'Title is required.';
      } else {
        titleValidation.textContent = '';
      }
    });

    bodyInput.addEventListener('input', () => {
      if (bodyInput.validity.valueMissing) {
        bodyValidation.textContent = 'Body is required.';
      } else {
        bodyValidation.textContent = '';
      }
    });
  }
}

customElements.define('note-form', NoteForm);