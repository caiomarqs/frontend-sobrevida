import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Nav, Footer, OverMenu } from './components';
import { Home, NotFound } from './view';

import './_sass/styles.scss';
import { OverMenuProvider } from './contexts';

const App = () => {
  return (
    <Router>
      {/* Nav vai compilar em todas as paginas, precisa do over menu provider para gerenciar o seu estado */}
      <OverMenuProvider>
        <Nav />
        <OverMenu />
      </OverMenuProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
