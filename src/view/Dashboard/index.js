import React, { useContext, useEffect } from 'react'

import { Authcontext } from '../../contexts'
import { Footer, Nav } from '../../components'
import { DashboardPainel } from './DashboardPainel'

const DashBoard = () => {

    const { authState } = useContext(Authcontext)

    useEffect(() => {
        document.title = 'sobreVida | Dashboard'
    }, [authState])


    return (
        <>
            <Nav />
            <DashboardPainel />
            <Footer />
        </>
    )

}

export { DashBoard }