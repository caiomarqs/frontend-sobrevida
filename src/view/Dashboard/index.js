import React, { useContext, useEffect } from 'react'

import { Authcontext, OverMenuProvider } from '../../contexts'
import { Footer, Nav, OverMenu } from '../../components'
import { DashboardPainel } from './DashboardPainel'

const DashBoard = () => {

    const { authState } = useContext(Authcontext)

    useEffect(() => {
        document.title = 'sobreVida | Dashboard'
    }, [authState])


    return (
        <>
            <OverMenuProvider>
                <Nav />
                <OverMenu />
            </OverMenuProvider>
            <DashboardPainel />
            <Footer />
        </>
    )

}

export { DashBoard }