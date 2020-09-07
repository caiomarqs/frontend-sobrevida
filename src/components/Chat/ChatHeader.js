import React, { useContext } from 'react'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { CloseIcon } from '../Icons'
import constants from '../../constants/texts'

const ChatHeader = () => {

    const { dispatch } = useContext(ChatContext)

    return (
        <div className='chat-header'>
            <CloseIcon onClick={() => { dispatch({ type: CHAT_ACTIONS.OPEN }) }} />
            <span>{constants['chatContainer.title']}</span>
        </div>
    )
}

export { ChatHeader }