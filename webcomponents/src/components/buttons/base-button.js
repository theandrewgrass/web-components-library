import { LitElement, html, css } from 'lit';
import { RippleController } from 'Controllers/ripple-controller.js';

export const styles = css`
  :host {
    display: inline-block;
    width: 100%;
    
    --button-font: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';
    --button-font-weight: 700;
    --button-line-height: 18.58px;
    --button-height: 48px;
    --button-background-color: #FFFFFF;
    --button-text-color: #000000;
    --button-border-width: 1px;
    --button-border-color: #000000;
    --button-border-radius: 0;
    --button-padding-vertical: 0;
    --button-padding-horizontal: 16px;
    --button-width: 100%;
    --button-min-width: 100px;
    --button-cursor: pointer;
    --button-font-size: 16px;
    --button-inner-gap: 10px;
    --button-disabled-cursor: not-allowed;
    --button-margin-vertical: 0;
    --button-margin-horizontal: 0;

    /* hover */
    --button-hover-background-color: #CCCCCC;
  }

  button {
    /* placement */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--button-inner-gap);
    
    /* font */
    font-family: var(--button-font);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    line-height: var(--button-line-height);

    /* colour */
    background-color: var(--button-background-color);
    color: var(--button-text-color);

    /* sizing */
    min-width: var(--button-min-width);
    width: var(--button-width);
    height: var(--button-height);

    /* margin and padding */
    padding: var(--button-padding-vertical) var(--button-padding-horizontal);
    margin: var(--button-margin-vertical) var(--button-margin-horizontal);

    /* border and outline */
    border: none; /* remove default border */
    outline: none; /* remove default outline */
    border-style: solid;
    border-width: var(--button-border-width);
    border-color: var(--button-border-color);
    border-radius: var(--button-border-radius);
    
    /* misc */
    cursor: var(--button-cursor);

    position: relative;
    overflow: hidden;
    width: 100%;
  }

  button:disabled {
    cursor: var(--button-disabled-cursor);
  }

  button:hover {
    background-color: var(--button-hover-background-color);
  }

  button:focus {
    background-color: var(--button-hover-background-color);
  }

  .button-container {
    display: inline-block;
    width: 100%;
    outline: 2px solid transparent;
    border: 2px solid transparent;
  }

  .button-container:focus-within {
    outline-color: black;
    border-color: white;
  }
`;

export class BaseButton extends LitElement {
  constructor() {
    super();
    this.text = "Click Me!";
    this.disabled = false;
    this.rippleController;
  }
  
  static get properties() {
    return {
      text: {type: String, attribute: true},
      disabled: {type: Boolean, attribute: true},
      mouseDown: {type: Boolean, attribute: false},
    };
  }
  
  static get styles() { return [styles]; }
  
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this);
    this.addEventListener('focus', this);
    this.addEventListener('mousedown', this);
    this.addEventListener('mouseup', this);
    this.addEventListener('animationend', this);
  }
  
  firstUpdated() {
    this.rippleController = new RippleController(this, this.shadowRoot.querySelector('button'));
  }

  handleEvent(event) {
    switch (event.type) {
      case 'click':
        this.handleClick(event);
        break;
      case 'focus':
        this.handleFocus(event);
        break;
      case 'mousedown':
        this.mouseDown = true;
        break;
      case 'mouseup':
        this.mouseDown = false;
        break;
      case 'animationend':
        this.handleAnimationEnd(event);
        break;
    }
  }
  
  handleClick(event) {
    this.rippleController.handleClick(event);
  }


  handleFocus(event) {
    if (this.mouseDown)
      event.target.blur();
  }

  handleAnimationEnd(event) {
    const readyForActionEvent = new CustomEvent('readyForAction', {
      bubbles: true,
      composed: true,
      detail: {
        target: this,
        event: event,
      },
    });

    this.dispatchEvent(readyForActionEvent);
  }

  render() {
    return html`
      <div class="button-container" tabindex="-1">
        <button type="button" ?disabled=${this.disabled} tabindex="0">
          ${this.text}
        </button>
      </div>
    `;
  }
}

if (!customElements.get('base-button'))
  customElements.define('base-button', BaseButton);