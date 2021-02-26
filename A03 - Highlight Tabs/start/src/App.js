import React from 'react';
import './App.css';



import { BrowserRouter as Router } from "react-router-dom"
import Routes from './components/Routes';
import Header from './components/Header';

function App() {

  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />
          <Routes />
        </div>
      </div>

    </Router>
  );
}

export default App;
