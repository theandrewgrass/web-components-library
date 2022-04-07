import { css } from 'lit';
import { BaseButton } from '../base-button.js';

export const styles = css`
  :host {
    --button-border-color: rgba(0,0,0,0.42);
    --button-hover-background-color: #EAEAEA;
    
    --ripple-color: #000000;
  }
`;

export class SecondaryButton extends BaseButton {
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

customElements.define('secondary-button', SecondaryButton);