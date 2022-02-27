import { LitElement, html, css } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';

export const styles = css`
  :host {
    --spinner-width: 4px;
  }

  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
  
  .spinner {
    padding-top: calc(100% - 2*var(--spinner-width));
    box-sizing: border-box;
    border-radius: 50%;
    border-width: var(--spinner-width);
    border-color: #ccc;
    border-top-color: #000;
    animation: spinner .6s linear infinite;
  }

  .spinner.solid {
    border-style: solid;
  }

  .spinner.gradient {
    border-style: outset;
  }

  .spinner.outline {
    border-style: double;
  }
`;

export class BasicSpinner extends LitElement {
  constructor() {
    super();
    this.spinnerType = 'solid';
  }

  static get properties() {
    return {
      spinnerType: {type: String, attribute: true}
    };
  }
  
  static get styles() { return [styles]; }

  spinnerTypeMap = {
    solid: 'solid',
    gradient: 'gradient',
    outline: 'outline',
  }

  render() {
    const classes = {
      spinner: true,
      [this.spinnerTypeMap[this.spinnerType]]: true,
    }

    return html`<div class=${classMap(classes)}></div>`;
  }
}

customElements.define('basic-spinner', BasicSpinner);