import 'webcomponents';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Web Components Demo</h1>
      <h2>Currently inside a React Application</h2>
      <p>Press the button below to try it out!</p>
      <p style={{fontSize: "48px"}}>👇</p>

      <div style={{width: "200px"}}>
        <primary-button text="Clickeroo!" />
        <secondary-button text="Skadoosh!" />
      </div>
    </div>
  );
}

export default App;
