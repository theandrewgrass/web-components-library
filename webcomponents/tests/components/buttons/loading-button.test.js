import 'components/buttons/loading-button/loading-button.js';

describe('LoadingButton', () => {
  let button;

  const LOADING_BUTTON_TAG = 'loading-button';
  const defaultActionText = 'Load';
  const defaultProgressText = 'Loading';

  beforeEach(() => {
    button = document.createElement(LOADING_BUTTON_TAG);
    document.body.appendChild(button);

    button.doAction = jest.fn()
      .mockReturnValue(Promise.resolve());
  });

  afterEach(() => {
    button.remove();
  });
  
  it('should be created', () => {
    expect(button).toBeTruthy();
  });
  
  it('should have the correct default values', () => {
    expect(button.actionText).toBe(defaultActionText);
    expect(button.progressText).toBe(defaultProgressText);
  });
  
  it('should have the correct values after being overridden', () => {
    const { newActionText, newProgressText } = { 
      newActionText: 'Submit', 
      newProgressText: 'Submitting' 
    };
    
    button.actionText = newActionText;
    button.progressText = newProgressText;
    
    expect(button.actionText).toBe(newActionText);
    expect(button.progressText).toBe(newProgressText);
  });
  
  it('should display the action text when idle', () => {
    let buttonContent = button.shadowRoot.querySelector('button > span.action-text');
    
    expect(buttonContent.textContent).toBe(defaultActionText);
  });
  
  it('should show loading spinner and progress text when in loading state', async () => {
    const progressText = `${defaultProgressText}...`;

    button.enterLoadingState();
    await button.updateComplete;

    let buttonContent = button.shadowRoot.querySelectorAll('button > span');
    expect(buttonContent).toHaveLength(2);

    // the first span in buttonContent should have the class 'spinner'
    let spinnerSpan = buttonContent[0];
    expect(spinnerSpan.classList).toContain('spinner');

    // the second span in buttonContent should have the class 'progress-text'
    let progressTextSpan = buttonContent[1];
    expect(progressTextSpan.classList).toContain('progress-text');
    
    expect(progressTextSpan.textContent).toBe(progressText);
  });
  
  it('should trigger doAction when handling click event', () => {
    const handleClickSpy = jest.spyOn(button, 'handleClick');
    const doActionSpy = jest.spyOn(button, 'doAction');

    button.click();
    
    expect(handleClickSpy).toHaveBeenCalled();
    expect(doActionSpy).toHaveBeenCalled();
  });
  
  it('should throw an error if the doAction function is not defined', () => {
    button.doAction = undefined;
    
    expect(() => {
      button.doAction();
    }).toThrow();
  });
  
  it('should enter loading state on handleClick and exit when completed', async () => {
    const enterLoadingState = jest.spyOn(button, 'enterLoadingState');
    const exitLoadingState = jest.spyOn(button, 'exitLoadingState');

    await button.handleClick(new Event('click'));
    
    expect(enterLoadingState).toHaveBeenCalled();
    expect(exitLoadingState).toHaveBeenCalled();
  });
});
