import { LitElement, html, css } from 'lit';
import {styleMap} from 'lit/directives/style-map.js';

export const styles = css`
  .animation-container {
    height: 100%;
    width: 100%;
  }
`;

export class Animation extends LitElement {
  constructor() {
    super();
    this.animationWidth;
    this.animationHeight;
  }
  
  static get properties() {
    return {
      animationHeight: {type: Number, attribute: true},
      animationWidth: {type: Number, attribute: true}
    };
  }

  static get styles() { return [styles]; }

  render() {
    const styles = {};
    
    if (this.animationWidth)
      styles.width = `${this.animationWidth}px`;
    if (this.animationHeight)
      styles.height = `${this.animationHeight}px`;

    return html`
      <div class="animation-container" style=${styleMap(styles)}>
        <slot name="animation"></slot>
      </div>
    `;
  }
}

customElements.define('kobo-animation', Animation);