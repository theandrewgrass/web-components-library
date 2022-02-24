import { useRef,  useEffect } from 'react';
import logo from './logo.svg';
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
      <loading-button
        ref={loadingButtonRef}
        actionText="Save"
        progressText="Saving"        
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
