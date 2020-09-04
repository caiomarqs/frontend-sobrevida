import React from 'react'

import { PrincipalSection } from './HomeSections/PrincipalSection'
import { DoeSection } from './HomeSections/DoeSection'
import { PraQuemSection } from './HomeSections/PraQuemSection'
import { ChartsSection } from './HomeSections/ChartsSections'
import { DuvidasSection } from './HomeSections/DuvidasSection'
import { ChatBrandSection } from './HomeSections/ChatBrandSection'

const Home = () => {
    return (
        <>
            <PrincipalSection />
            <DoeSection />
            <PraQuemSection />
            <ChartsSection />
            <DuvidasSection />
            <ChatBrandSection />
        </>
    )
}

export { Home }