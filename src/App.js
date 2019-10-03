import React from 'react';
import './App.css';
import EpisodeList from "./EpisodeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Hamborne Haircut Podcast Homepage</h1>
            <h2>Episodes:</h2>
          <EpisodeList title="1" />
          <EpisodeList title="2"/>
          <EpisodeList title="3" />
          <EpisodeList title="4" />
          <EpisodeList title="5" />
      </header>
        <body>
        </body>
    </div>
  );
}

export default App;
