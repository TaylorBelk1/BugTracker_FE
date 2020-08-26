import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Pages from './components/Routes/Pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Pages} />
      </div>
    </Router>
  );
}

export default App;
