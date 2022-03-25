import { LitElement, html, css } from 'lit';

export const styles = css`
  :host {
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
    --button-width: auto;
    --button-min-width: 100px;
    --button-cursor: pointer;
    --button-font-size: 16px;
    --button-inner-gap: 10px;
    --button-disabled-cursor: not-allowed;
    --button-margin-vertical: 0;
    --button-margin-horizontal: 0;

    /* hover */
    --button-hover-background-color: #CCCCCC;

    /* ripple */
    --button-ripple-color: #FFFFFF;
    --button-ripple-opacity: 0.8;
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
    outline: 2px solid transparent;
    border: 2px solid transparent;
  }

  .button-container:focus-within {
    outline-color: black;
    border-color: white;
  }

  /* ripple effect */
  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: var(--button-ripple-color);
    opacity: var(--button-ripple-opacity);
    cursor: default;
  }

  @keyframes ripple {
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
`;

export class BaseButton extends LitElement {
  constructor() {
    super();
    this.text = "Click Me!";
    this.disabled = false;
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
    }
  }
      
  handleClick(event) {
    this.createRipple(event);
  }

  handleFocus(event) {
    if (this.mouseDown)
      event.target.blur();
  }

  createRipple(event) {
    // get the button element inside the shadow dom of the current element in event
    const button = this.shadowRoot.querySelector('button');
    const circle = document.createElement("span");
    const diameter = Math.max(button.offsetWidth, button.offsetHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple"); 

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    button.onanimationend = () => {
      button.removeChild(circle);
    } 
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

customElements.define('base-button', BaseButton);