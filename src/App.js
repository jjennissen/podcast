import React from 'react';
import './App.css';
import EpisodeList from "./EpisodeList";
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Hamborne Haircut Podcast Homepage</h1>
            <h2>Episodes:</h2>
          <EpisodeList>
          </EpisodeList>
          <EpisodeList>
          </EpisodeList>
          <EpisodeList>
          </EpisodeList>
          <EpisodeList>
          </EpisodeList>
      </header>
        <body>
        </body>
    </div>
  );
}

export default App;
