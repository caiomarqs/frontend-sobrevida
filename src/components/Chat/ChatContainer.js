import React, { useEffect, useState, useContext } from 'react'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { CloseIcon } from '../Icons'
import constants from '../../constants/texts'
import { ChatFooter } from './ChatFooter'

const ChatContainer = () => {

    const [bottomPosition, setBottomPosition] = useState({})
    const { chatState, dispatch } = useContext(ChatContext)

    useEffect(() => {
        let monted = true

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

    }, [])


    return (
        <div id='chat-container' style={bottomPosition} className={`chat-container ${(chatState.isOpen === true ? 'open' : '')}`}>
            <div className='chat-header'>
                <CloseIcon onClick={() => { dispatch({ type: CHAT_ACTIONS.OPEN }) }} />
                <span>{constants['chatContainer.title']}</span>
            </div>
            <div className='chat-dialog'>

            </div>
            <ChatFooter />
        </div>
    )
}

export { ChatContainer }