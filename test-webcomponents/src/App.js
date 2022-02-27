import { useRef,  useEffect } from 'react';
import 'webcomponents';
import './App.css';

function App() {
  const loadingButtonRef = useRef(null);

  useEffect(() => {
    loadingButtonRef.current.doAction = someAction;
  }, []);

  function someAction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="App">
      <h1>Web Components Demo</h1>
      <h2>Currently inside a React Application</h2>
      <p>Press the button below to try it out!</p>
      <p style={{fontSize: "32px"}}>👇</p>

      <loading-button
        ref={loadingButtonRef}
        actionText="Save"
        progressText="Saving"
        completedText="Saved"        
      >
        
        <kobo-animation slot="loading-indicator">
          <basic-spinner slot="animation"></basic-spinner>
        </kobo-animation>
        
        <kobo-animation slot="success-indicator">
          <kobo-checkmark slot="animation"></kobo-checkmark>
        </kobo-animation>

      </loading-button>
    </div>
  );
}

export default App;
