import React, { useContext, useCallback, useState } from 'react'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { SendIcon } from '../Icons'



const ChatFooter = () => {

    const { dispatch } = useContext(ChatContext)
    const [textInput, setTextInput] = useState('') //Não é recomendavel usar no reducer, pois desencadea varias chadamadas do reducer


    //Manda a mensagem para o contexto, e dialogo vai retorna a mensagem
    const handleSendMessage = useCallback((userMessage) => {
        dispatch({ type: CHAT_ACTIONS.SEND_MESSAGE, payload: [{ user: 'bot', value: userMessage }, { user: 'Você', value: userMessage }] })
        document.querySelector('#chat-input').value = ''
        setTextInput('')
    }, [dispatch])

    //Verifica se o usuario aperta enter no input
    const enterKeyPress = (e, userMessage) => {
        if (e.keyCode === 13 && userMessage !== '') handleSendMessage(userMessage)
    }

    return (
        <div className='chat-footer'>
            <input
                id='chat-input'
                type='text'
                onChange={(e) => { setTextInput(e.target.value) }}
                placeholder='Escreva sua menssagem!'
                onKeyDown={(e) => enterKeyPress(e, textInput)}
                autoComplete='off'
            />
            <button
                id="send-button"
                type='submit'
                className={(textInput !== '') ? '' : 'disabled'}
                disabled={(textInput !== '') ? false : true}
                onClick={() => handleSendMessage(textInput)}
            >
                <SendIcon />
            </button>
        </div>
    )
}

export { ChatFooter }