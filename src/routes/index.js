import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Authcontext } from '../contexts';

import { Home, NotFound } from '../view';
import { SheelRoutes } from './SheelRoutes';
import { DashRoutes } from './DashRoutes';

const Routes = () => {

    const { authState } = useContext(Authcontext)

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {!authState.isAuth
                    ?
                    <SheelRoutes />
                    :
                    <DashRoutes />
                }
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export { Routes };