import { LitElement, html, css } from 'lit';

export const styles = css`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #fff;
    border: 1px solid #444;
    border-radius: 25px;
    padding: 5px 15px;
    cursor: pointer;
    min-width: 150px;
    min-height: 50px;
    font-size: 16px;
  }

  button:disabled {
    cursor: not-allowed;
  }

  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
  
  .spinner {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: spinner .6s linear infinite;
  }
`;

/**
 * @class LoadingButton
 * @description A button that can be used to trigger an action while also showing the progress of that action.
 * @extends {LitElement}
 * @property {Function} [doAction] The action to be performed when the button is clicked. Must return a Promise.
 * @property {String} [actionText] The text to be displayed on the button in its idle state. Should depict the action to be performed on click.
 * @property {String} [progressText] The text to be displayed on the button in its loading state. Should depict the action in an active state (i.e. Save -> Saving).
 */
export class LoadingButton extends LitElement {
  constructor() {
    super();
    this._isLoading = false;
    this.actionText = 'Load';
    this.progressText = 'Loading';
  }
  
  static get properties() {
    return {
      _isLoading: {state: true},
      actionText: {type: String, attribute: true},
      progressText: {type: String, attribute: true},
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

  showLoadingState() {
    return html`
      <button disabled>
        <span class="spinner"></span>
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

  render() {
    return html`
      ${
        this._isLoading 
          ? this.showLoadingState() 
          : this.showIdleState()
      }
    `;
  }
}

customElements.define('loading-button', LoadingButton);