import { LitElement, html, css } from 'lit';
import '../animations/animation';

export const styles = css`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #fff;
    border: 1px solid #444;
    border-radius: 25px;
    padding: 15px;
    cursor: pointer;
    min-width: 150px;
    width: 100%;
    height: 50px;
    font-size: 16px;
  }

  button:disabled {
    cursor: not-allowed;
  }
`;

/**
 * @class LoadingButton
 * @description A button that can be used to trigger an action while also showing the progress of that action.
 * @extends {LitElement}
 * @property {Function} [doAction] The action to be performed when the button is clicked. Must return a Promise.
 * @property {String} [actionText] The text to be displayed on the button in its idle state. Should depict the action to be performed on click.
 * @property {String} [progressText] The text to be displayed on the button in its loading state. Should depict the action in an active state (i.e. Save -> Saving).
 * @property {String} [completedText] The text to be displayed on the button in its completed state. Should depict the action in a completed state (i.e. Save -> Saved).
 */
export class LoadingButton extends LitElement {
  constructor() {
    super();
    this._isLoading = false;
    this._succeeded = false;
    this.actionText = 'Load';
    this.progressText = 'Loading';
    this.completedText = 'Loaded';
  }
  
  static get properties() {
    return {
      _isLoading: {state: true},
      _succeeded: {state: true},
      actionText: {type: String, attribute: true},
      progressText: {type: String, attribute: true},
      completedText: {type: String, attribute: true}
    };
  }
  
  static get styles() { return [styles]; }
  
  doAction() { 
    throw new Error("doAction must be implemented or else I don't know what to do!"); 
  };

  async handleEvent(event) {
    switch (event.type) {
      case 'click':
        await this.handleClick(event);
        break;
    }
  }
    
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this);
  }
    
  async handleClick(event) {
    event.preventDefault();
    this.enterLoadingState();

    this.doAction()
      .then(() => {
        this.enterSuccessState();
        this.exitLoadingState();
      })
      .catch((error) => {
        console.error(error);
        this.exitLoadingState();
      });
  }

  enterLoadingState() {
    this._isLoading = true;
  }

  exitLoadingState() {
    this._isLoading = false;
  }

  enterSuccessState() {
    this._succeeded = true;
  }

  showLoadingState() {
    return html`
      <button disabled>
        <kobo-animation animationHeight="20" animationWidth="20">
          <slot slot="animation" name="loading-indicator"></slot>
        </kobo-animation>
        <span class="progress-text">${this.progressText}...</span>
      </button>
    `;
  }

  showIdleState() {
    return html`
      <button>
        <span class="action-text">${this.actionText}</span>
      </button>
    `;
  }

  showSuccessState() {
    return html`
      <button>
        <kobo-animation animationHeight="20" animationWidth="20">
          <slot slot="animation" name="success-indicator"></slot>
        </kobo-animation>
        <span class="completed-text">${this.completedText}!</span>
      </button>
    `;
  }

  render() {
    return html`
      ${
        this._isLoading 
          ? this.showLoadingState() 
          : this._succeeded
            ? this.showSuccessState()
            : this.showIdleState()
      }
    `;
  }
}

customElements.define('loading-button', LoadingButton);