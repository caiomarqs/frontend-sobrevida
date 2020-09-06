import React, { useEffect } from 'react'

import { Chat } from '../components'
import { PrincipalSection } from './HomeSections/PrincipalSection'
import { DoeSection } from './HomeSections/DoeSection'
import { ParaQuemSection } from './HomeSections/ParaQuemSection'
import { ChartsSection } from './HomeSections/ChartsSections'
import { DepoimentosSection } from './HomeSections/DepoimentosSection'
import { DuvidasSection } from './HomeSections/DuvidasSection'
import { ChatBrandSection } from './HomeSections/ChatBrandSection'


const Home = () => {
    
    useEffect(() => {
        document.title = 'sobreVida | Home'
    }, [])

    return (
        <>
            <Chat />
            <PrincipalSection />
            <DoeSection />
            <ParaQuemSection />
            <ChartsSection />
            <DepoimentosSection />
            <DuvidasSection />
            <ChatBrandSection />

        </>
    )
}

export { Home }