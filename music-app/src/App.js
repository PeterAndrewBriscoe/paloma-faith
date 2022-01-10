import likeButton from './Components/likeButton';
import './App.css';
import React from 'react'
import FeaturedAlbum from './Components/Albums';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paloma Faith</h1>
        <img src='https://m.media-amazon.com/images/I/81bOgwFZLYL._AC_SL1500_.jpg' className="App-logo" alt="logo" />
        <p>
          Paloma Faith is an indie singer
        </p>
        <FeaturedAlbum />
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
