class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="loading-overlay"><div class="loading-spinner"></div></div>`;
  }
}
customElements.define('loading-indicator', LoadingIndicator);
