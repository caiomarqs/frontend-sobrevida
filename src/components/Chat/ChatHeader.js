import React, { useContext } from 'react'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { CloseIcon } from '../Icons'
import constants from '../../constants/texts'
import useAgentDetect from '../../hooks/useAgentDetect'

const ChatHeader = () => {

    const { dispatch } = useContext(ChatContext)
    const { isMobile } = useAgentDetect();

    const handleCloseChat = () => {
        //Comportamento do chat aberto no mobile é diferente, abre em tela inteira
        if (isMobile) document.querySelector('body').style.overflow = 'unset'
        dispatch({ type: CHAT_ACTIONS.OPEN })
    }

    return (
        <div className='chat-header'>
            <CloseIcon onClick={() => handleCloseChat()} />
            <span>{constants['chatContainer.title']}</span>
        </div>
    )
}

export { ChatHeader }