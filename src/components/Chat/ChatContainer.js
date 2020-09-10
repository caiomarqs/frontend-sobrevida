import React, { useEffect, useState, useContext } from 'react'

import { ChatContext } from '../../contexts'
import { ChatHeader } from './ChatHeader'
import { ChatFooter } from './ChatFooter'
import { ChatDialog } from './ChatDialog'
import useAgentDetect from '../../hooks/useAgentDetect'


const ChatContainer = () => {

    const [bottomPosition, setBottomPosition] = useState({})
    const { chatState } = useContext(ChatContext)
    const { isMobile } = useAgentDetect();

    useEffect(() => {
        let monted = true
        
        //Comportamento do chat aberto no mobile é diferente, abre em tela inteira
        if (!isMobile) {
            
            const stopPosition = () => {
                const footerTopPosition = document.querySelector('footer').offsetTop
                const scrollTop = window.scrollY + window.innerHeight;
                const difference = scrollTop - footerTopPosition;
                const bottomValue = scrollTop > footerTopPosition ? difference + 32 : '2rem';

                setBottomPosition({ bottom: bottomValue })
            }

            stopPosition()

            if (monted === true) document.addEventListener('scroll', stopPosition)
            
            return (() => {
                monted = false
                if (monted === false) document.removeEventListener('scroll', stopPosition)
            })
        }
        else{
            setBottomPosition({ bottom: 0 })
            document.querySelector('body').style.overflow = 'hidden'
        }
        
    }, [isMobile])


    return (
        <div id='chat-container' style={bottomPosition} className={`chat-container ${(chatState.isOpen === true ? 'open' : '')}`}>
            <ChatHeader />
            <ChatDialog />
            <ChatFooter />
        </div>
    )
}

export { ChatContainer }