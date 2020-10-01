import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Nav, Footer, OverMenu } from './components';
import { Home, NotFound, Login, Cadastro } from './view';
import { ComponentsProvider, OverMenuProvider } from './contexts';

import './_sass/styles.scss';

const App = () => {

  return (
    <Router>
      <ComponentsProvider>
        {/* Nav vai compilar em todas as paginas, precisa do over menu provider para gerenciar o seu estado */}
        <OverMenuProvider>
          <Nav />
          <OverMenu />
        </OverMenuProvider>
        <Switch>
          <Route exact path="/"         component={Home} />
          <Route exact path="/login"    component={Login} />
          <Route exact path="/register" component={Cadastro} />
          <Route       path="*"         component={NotFound} />
        </Switch>
        <Footer />
      </ComponentsProvider>
    </Router>
  )
}

export default App;