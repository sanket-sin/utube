import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/utube';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
//import VideoList from './components/VideoList';

class App extends React.Component {
  render() {
    return(
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid justify="center" item xs={6}>
              <SearchBar />

            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
            </Grid>
            </Grid> 

        </Grid>
      </Grid>
    )
  }
}

export default App;



/*
 import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
} */

