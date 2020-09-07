import React, { useContext } from 'react';

import { ChatButton } from './ChatButton';
import { ChatContext } from '../../contexts';

const Chat = (props) => {

    const { chatState } = useContext(ChatContext)

    return (
        (chatState.isOpen === false)
            ? <ChatButton />
            : <></>
    )
}

export { Chat }