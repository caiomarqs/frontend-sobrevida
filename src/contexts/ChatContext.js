import React, { createContext, useReducer } from 'react'

import { chatReducer } from '../reducers'

const ChatContext = createContext()

const INITAL_STATE = {
    isOpen: false,
    allMessages: [],
    loadingMessage: false
}

const CHAT_ACTIONS = {
    OPEN: 'OPEN',
    SEND_MESSAGE: 'SEND_MESSAGE',
    INIT_SEND_MESSAGE: 'INIT_SEND_MESSAGE',
    END_SEND_MESSAGE: 'END_SEND_MESSAGE',
    CLEAR_CONVERSATION: 'CLEAR_CONVERSATION'
}


const ChatProvider = (props) => {

    const [chatState, dispatch] = useReducer(chatReducer, INITAL_STATE)

    return (
        <ChatContext.Provider value={{ chatState, dispatch }}>
            {props.children}
        </ChatContext.Provider>
    )

}

export { ChatContext, ChatProvider, CHAT_ACTIONS }