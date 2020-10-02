import React, { useEffect } from 'react'

import { Chat, Nav, OverMenu, Footer } from '../components'
import { PrincipalSection } from './HomeSections/PrincipalSection'
import { DoeSection } from './HomeSections/DoeSection'
import { ParaQuemSection } from './HomeSections/ParaQuemSection'
import { ChartsSection } from './HomeSections/ChartsSections'
import { DepoimentosSection } from './HomeSections/DepoimentosSection'
import { DuvidasSection } from './HomeSections/DuvidasSection'
import { ChatBrandSection } from './HomeSections/ChatBrandSection'
import { ChatProvider, OverMenuProvider } from '../contexts'


const Home = () => {

    useEffect(() => {
        document.title = 'sobreVida | Home'
    }, [])

    return (
        <>
            <ChatProvider>
                {/* Nav vai compilar em todas as paginas, precisa do over menu provider para gerenciar o seu estado */}
                <OverMenuProvider>
                    <Nav isHome={true} />
                    <OverMenu isHome={true} />
                </OverMenuProvider>
                <Chat />
                <PrincipalSection />
                <DoeSection />
                <ParaQuemSection />
                <ChartsSection />
                <DepoimentosSection />
                <DuvidasSection />
                <ChatBrandSection />
                <Footer isHome={true}/>
            </ChatProvider>
        </>
    )
}

export { Home }