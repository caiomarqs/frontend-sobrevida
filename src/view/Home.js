import React from 'react'

import { PrincipalSection } from './HomeSections/PrincipalSection'
import { DoeSection } from './HomeSections/DoeSection'
import { ParaQuemSection } from './HomeSections/ParaQuemSection'
import { ChartsSection } from './HomeSections/ChartsSections'
import { DuvidasSection } from './HomeSections/DuvidasSection'
import { ChatBrandSection } from './HomeSections/ChatBrandSection'

const Home = () => {
    return (
        <>
            <PrincipalSection />
            <DoeSection />
            <ParaQuemSection />
            <ChartsSection />
            <DuvidasSection />
            <ChatBrandSection />
        </>
    )
}

export { Home }