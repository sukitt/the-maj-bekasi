import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './view/Home';
import TentangKami from './view/TentangKami';
import Partnership from './view/Partnership';
import Expertice from './view/Expertice';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tentang-kami">
          <TentangKami />
        </Route>
        <Route exact path="/partnership/sakura">
          <Partnership />
        </Route>
        <Route exact path="/expertice">
          <Expertice />
        </Route>
      </div>
    </Router>
  );
}

export default App;
