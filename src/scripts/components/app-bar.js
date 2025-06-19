class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <header class="app-bar">
        <h1 class="app-title">Noted</h1>
        <p class="app-subtitle">Your simple and fun note-taking app.</p>
      </header>
    `;
  }
}
customElements.define('app-bar', AppBar);