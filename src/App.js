import React from 'react';
import './App.css';
import Routes from './routes';
import Navbar from './shared/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
