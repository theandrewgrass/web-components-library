import { LitElement, html, css } from 'lit';

export const styles = css`
  :host {
    --spinner-width: 2px;
  }

  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
  
  .spinner {
    padding-top: calc(100% - 2*var(--spinner-width));
    box-sizing: border-box;
    border-radius: 50%;
    border: var(--spinner-width) solid #ccc;
    border-top-color: #000;
    animation: spinner .6s linear infinite;
  }
`;

export class BasicSpinner extends LitElement {
  constructor() {
    super();
  }
  
  static get styles() { return [styles]; }

  render() {
    return html`<div class="spinner"></div>`;
  }
}

customElements.define('basic-spinner', BasicSpinner);