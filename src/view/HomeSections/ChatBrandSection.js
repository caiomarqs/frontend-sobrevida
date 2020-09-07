import React, { useContext } from 'react'

import constants from '../../constants/texts'
import { Button } from '../../components'
import { ChatContext, CHAT_ACTIONS } from '../../contexts'

const ChatBrandSection = () => {

    const { dispatch } = useContext(ChatContext)

    return (
        <section id="chat-brand-section">
            <div className="container">
                <h3>{constants['chatBrandSection.title']}</h3>
                <p>{constants['chatBrandSection.subTitle']}</p>
                <img alt={constants['chatBrandSection.title']} src={require('../../assets/img/chatballons.png')} />
                <Button value="Chat" className="solid-button-primary" onClick={() => dispatch({ type: CHAT_ACTIONS.OPEN })} />
            </div>
        </section>
    )
}

export { ChatBrandSection }