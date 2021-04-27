import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
			<h3>Live Stream Yassine</h3>
			<video source="https://e087512ad0c32643.mediapackage.eu-west-1.amazonaws.com/out/v1/0482f99c52db43e2a55ddb756b935c43/index.m3u8"></video>
			<h3>Live Stream LS</h3>
			<video source="https://18cd60dea8190528.mediapackage.eu-west-3.amazonaws.com/out/v1/4ddfdceaecc44fa684324e408b8492c1/index.m3u8"></video>
    </div>
  );
}

export default App;
