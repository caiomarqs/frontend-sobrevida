import React, { createContext, useReducer } from 'react'

import { chatReducer } from '../reducers'

const ChatContext = createContext()

const INITAL_STATE = {
    isOpen: false,
    allMensages: []
}

const CHAT_ACTIONS = {
    OPEN: 'OPEN',
    SEND_MENSAGE: 'SEND_MENSAGE'
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