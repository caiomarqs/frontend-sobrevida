import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Nav } from './components';
import { Home, NotFound } from './view';

import './_sass/styles.scss';

const App = () => {
  return (
    <Router>
      {/* Nav vai compilar em todas as paginas */}
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
