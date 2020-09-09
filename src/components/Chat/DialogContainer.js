import React from 'react';

import { RenderMD } from '../RenderMD'

const DialogContainer = ({ message, ...props }) => {
    return (
        <div className={`dialog-container ${message.user !== 'bot' ? 'user' : 'bot'}`} {...props}>
            <span>{message.user === 'bot' ? 'vidinha' : message.user}</span>
            <RenderMD value={message.value} />
        </div>
    )
}

export { DialogContainer }