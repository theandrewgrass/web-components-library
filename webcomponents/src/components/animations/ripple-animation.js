import { LitElement, html, css } from 'lit';

export const styles = css`
  :host {
    --default-ripple-color: #FFFFFF;
    --default-ripple-opacity: 0.8;

    position: absolute;
  }

  .ripple {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: var(--ripple-color, var(--default-ripple-color));
    opacity: var(--ripple-opacity, var(--default-ripple-opacity));
  }

  @keyframes ripple {
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
`;

export class RippleAnimation extends LitElement {
  ripple;
  
  constructor() {
    super();
  }

  handleEvent(event) {
    switch (event.type) {
      case 'animationend':
        this.handleAnimationEnd();
        break;
    }
  }
  
  handleAnimationEnd() {
    this.dispatchEvent(new CustomEvent('animationend')); // propagates to parent
  }
  
  firstUpdated() {
    super.firstUpdated();
    this.ripple = this.shadowRoot.querySelector('span.ripple');
    this.ripple.addEventListener('animationend', this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.ripple.removeEventListener('animationend', this);
  }

  static get styles() { return [styles]; }

  render() {
    return html`
      <span class="ripple"></span>
    `;
  }
}

customElements.define('ripple-animation', RippleAnimation);