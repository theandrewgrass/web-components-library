import { css } from 'lit';
import { BaseButton } from '../base-button.js';

export const styles = css`
  :host {
    --button-background-color: #BF0000;
    --button-text-color: #FFFFFF;
    --button-border-color: #BF0000;

    --button-hover-background-color: #C41414;
  }
`;

export class PrimaryButton extends BaseButton {
  constructor() {
    super();
    this.text = "Click Me!";
  }
  
  static get properties() {
    return {
      text: {type: String, attribute: true},
    };
  }
  
  static get styles() { return [super.styles, styles]; }
}

customElements.define('primary-button', PrimaryButton);