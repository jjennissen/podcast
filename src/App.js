import React from 'react';
import './App.css';
import AlertList from "./AlertList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Target+ Alert Homepage</h1>
      </header>
        <body>
        <div className="App-body">
            <h2>Alerts:</h2>
            <AlertList title="1" summary=" Summary yeah yeah yeah "/>
            <AlertList title="2"/>
            <AlertList title="3" />
            <AlertList title="4" />
            <AlertList title="5" />
        </div>
        </body>
    </div>
  );
}

export default App;
