import React from 'react';
import { Route, Redirect } from 'react-router-dom'


import { Login, Cadastro } from '../view';

const SheelRoutes = () => {

    return (
        <>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Cadastro} />
            <Route exact path='/dash'>
                <Redirect to='/login'/>
            </Route>
        </>
    )
}

export { SheelRoutes };