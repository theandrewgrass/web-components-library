import { LitElement, html, css } from 'lit';

export const styles = css`
  :host {
    --check-width: calc(var(--check-height) / 2);
    --check-height: 100%;
  }

  .checkmark {
    height: 100%;
    width: 100%;
    stroke-width: 16;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .checkmark__check {
    animation: stroke 0.3s ease-in forwards;

    height: 100%;
    width: 100%;
    transform-origin: 50% 50%;
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0
    }
  }
`;

export class Checkmark extends LitElement {
  constructor() {
    super();
    this.runAnimation = true;
  }

  static get properties() {
    return {
      runAnimation: {type: Boolean, attribute: true}
    };
  }

  static get styles() { return [styles]; }

  render() {
    return html`
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path class="checkmark__check" fill="none" d="m12 46 28.7262 40.8214 49.1369-78.6191" />
      </svg>
    `;
  }
}

customElements.define('kobo-checkmark', Checkmark);