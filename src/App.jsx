import React from 'react';
import './app.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
