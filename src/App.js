import React from 'react';
import './App.css';
import AlertList from "./components/AlertList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Target+ Alert Homepage</h1>
      </header>
        <body>
            <div className="App-body">
                <h2>Alerts:</h2>
                    <AlertList />
            </div>
        </body>
    </div>
  );
}

export default App;
