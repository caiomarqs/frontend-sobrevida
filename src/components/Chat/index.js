import React, { useContext } from 'react';

import { ChatButton } from './ChatButton';
import { ChatContainer } from './ChatContainer';
import { ChatContext } from '../../contexts';

const Chat = (props) => {

    const { chatState } = useContext(ChatContext)

    return (
        (chatState.isOpen === false)
            ? <ChatButton />
            : <ChatContainer />
    )
}

export { Chat }