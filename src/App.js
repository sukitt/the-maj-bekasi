import React, { Suspense } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import ApplicationLayout from './view/ApplicationLayout';
import BaseRoute from './routes'
import LoaderSpinner from './component/base/loader/LoaderSpinner';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoaderSpinner></LoaderSpinner>}>
        <Router>
          <ApplicationLayout>
            <BaseRoute />
          </ApplicationLayout>
        </Router>
      </Suspense>
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