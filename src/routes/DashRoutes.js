import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import { Footer, Nav } from '../components';
import { Home, OptionsPainel, DashboardPainel, FamiliaresPainel, EditFamiliarPainel, DepoimentoPainel } from '../view';

const DashRoutes = () => {


    return (
        <>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/dash" component={DashboardPainel} />
            <Route exact path="/options" component={OptionsPainel} />
            <Route exact path="/familiares" component={FamiliaresPainel} />
            <Route exact path="/familiares/:num" component={EditFamiliarPainel} />
            <Route exact path="/depoimento" component={DepoimentoPainel} />
            <Route exact path='/login'>
                <Redirect to='/dash' />
            </Route>
            <Route exact path='/register'>
                <Redirect to='/dash' />
            </Route>
            <Footer />
        </>
    )
}

export { DashRoutes };