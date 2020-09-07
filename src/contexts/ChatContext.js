import React, { createContext, useReducer } from 'react'

import { chatReducer } from '../reducers'

const ChatContext = createContext()

const INITAL_STATE = {
    isOpen: false
}

const CHAT_ACTIONS = {
    OPEN: 'OPEN'
}

const ChatProvider = (props) => {

    const [chatState, dispatch] = useReducer(chatReducer, INITAL_STATE)

    return (
        <ChatContext.Provider value={{ chatState, dispatch, CHAT_ACTIONS }}>
            {props.children}
        </ChatContext.Provider>
    )

}

export { ChatContext, ChatProvider, CHAT_ACTIONS }