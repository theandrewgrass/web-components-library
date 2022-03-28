import { PrimaryButton } from './primary-button';

// TODO - look into mixins for implementing loading behavior
export class LoadingPrimaryButton extends PrimaryButton {
  constructor() {
    super();
    this.text = "Click Me!";
  }
  
  static get properties() {
    return {
      text: {type: String, attribute: true},
    };
  }
  
  static get styles() { return [super.styles]; }
}

customElements.define('loading-primary-button', LoadingPrimaryButton);