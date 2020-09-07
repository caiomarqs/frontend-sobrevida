import React, { useEffect, useState, useContext, useCallback } from 'react'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { CloseIcon, SendIcon } from '../Icons'
import constants from '../../constants/texts'

const ChatContainer = () => {

    const [bottomPosition, setBottomPosition] = useState({})
    const [userMensage, setUserMensage] = useState('')
    const { chatState, dispatch } = useContext(ChatContext)

    useEffect(() => {
        let monted = true

        const stopPosition = () => {
            const footerTopPosition = document.querySelector('footer').offsetTop
            const scrollTop = window.scrollY + window.innerHeight;
            const difference = scrollTop - footerTopPosition;
            const bottomValue = scrollTop > footerTopPosition ? difference + 32 : '2rem';

            setBottomPosition({ bottom: bottomValue })
        }


        if (monted === true) document.addEventListener('scroll', stopPosition)

        return (() => {
            monted = false
            if (monted === false) document.removeEventListener('scroll', stopPosition)
        })

    }, [])

    const handleSendMensage = useCallback((userMensage) => {
        console.log(userMensage)
        document.querySelector('#chat-input').value = ''
        setUserMensage('') 
               
    }, [])

    return (
        <div id='chat-container' style={bottomPosition} className={`chat-container ${(chatState.isOpen === true ? 'open' : '')}`}>
            <div className='chat-header'>
                <CloseIcon onClick={() => { dispatch({ type: CHAT_ACTIONS.OPEN }) }} />
                <span>{constants['chatContainer.title']}</span>
            </div>
            <div className='chat-dialog'>

            </div>
            <div className='chat-footer'>
                <input 
                    id='chat-input' 
                    type='text' 
                    onChange={(e) => setUserMensage(e.target.value)} 
                    placeholder='Escreva sua menssagem!' 
                />
                <button
                    id="send-button"
                    type='submit'
                    className={(userMensage !== '') ? '' : 'disabled'}
                    disabled={(userMensage !== '') ? false : true}
                    onClick={() => handleSendMensage(userMensage)}
                >
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export { ChatContainer }