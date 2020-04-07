import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ApplicationLayout from './view/ApplicationLayout';
import BaseRoute from './routes'

function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <ApplicationLayout>
          <BaseRoute />
        </ApplicationLayout>
      </Router>
    </div>
  );
}

export default App;




{/* <Router>
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
        <Route exact path="/blog/:id">
          <Blog />
        </Route>
      </div>
    </Router> */}