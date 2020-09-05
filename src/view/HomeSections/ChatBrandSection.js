import React from 'react'

import constants from '../../constants/texts'
import { Button } from '../../components'
const ChatBrandSection = () => {
    return (
        <section id="chat-brand-section">
            <div className="container">
                <h3>{constants['chatBrandSection.title']}</h3>
                <p>{constants['chatBrandSection.subTitle']}</p>
                <img alt={constants['chatBrandSection.title']} src={require('../../assets/img/chatballons.png')} />
                <Button value="Chat" className="solid-button-primary"/>
            </div>
        </section>
    )
}

export { ChatBrandSection }