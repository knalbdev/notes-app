class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="app-bar">
        <h1>Blank Notes App</h1>
      </header>
    `;
  }
}
customElements.define('app-bar', AppBar);