import { html } from 'lit-html';
import './loading-button';

export default {
  title: 'Buttons',
  component: 'loading-button',
  args: {
    actionText: 'Load',
    progressText: 'Loading',
  },
  argTypes: {
    actionText: { 
      name: 'Action Text',
      control: { type: 'text' } 
    },
    progressText: { 
      name: 'Progress Text',
      control: { type: 'text' } 
    },
    _isLoading: { table: { disable: true } },
    doAction: { table: { disable: true } },
  }
};

const LoadingButton = (args) => {
  const action = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  return html`
    <loading-button 
      id="some-id" 
      .doAction=${(action)} 
      actionText=${args.actionText}
      progressText=${args.progressText}>
    </loading-button>
  `;
}

export { LoadingButton };