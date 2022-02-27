import { css } from 'lit';
import { BasicSpinner } from "./basic-spinner.js";

export const styles = css`
  .spinner {
    border-style: outset;
  }
`;

export class GradientSpinner extends BasicSpinner {
  constructor() {
    super();
  }

  static get styles() {
    return [
      super.styles,
      styles
    ];
  }

  render() {
    return super.render();
  }
}

customElements.define('gradient-spinner', GradientSpinner);