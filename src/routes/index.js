import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Authcontext } from '../contexts';

import { Home, NotFound, Login, Cadastro, DashBoard } from '../view';

const Routes = () => {

    const { authState } = useContext(Authcontext)

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login">
                    {!authState.isAuth ? <Login /> : <Redirect to='/dash' />}
                </Route>
                <Route exact path="/register">
                    {!authState.isAuth ? <Cadastro /> : <Redirect to='/dash' />}
                </Route>
                <Route exact path="/dash">
                    {authState.isAuth ? <DashBoard /> : <Redirect to='/login' />}
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export { Routes };