import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Hamborne Haircut Podcast Homepage</h1>
            <h2>Episodes:</h2>
          <Box component="span" border={1} bgcolor="primary.main" m={1} p={1} paddingLeft={5}
          paddingRight={5}>
              Episode 0
          </Box>
          <Box component="span" border={1} bgcolor="primary.main" m={1} p={1} paddingLeft={5}
               paddingRight={5}>
              Episode 1
          </Box>
          <Box component="span" border={1} bgcolor="primary.main" m={1} p={1} paddingLeft={5}
               paddingRight={5}>
              Episode 2
          </Box>
          <Box component="span" border={1} bgcolor="primary.main" m={1} p={1} paddingLeft={5}
               paddingRight={5}>
              Episode 3
          </Box>
      </header>
        <body>
        </body>
    </div>
  );
}

export default App;
