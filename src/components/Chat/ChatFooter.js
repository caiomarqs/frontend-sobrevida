import React, { useContext, useCallback, useState } from 'react'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { SendIcon } from '../Icons'


const ChatFooter = () => {

    const { dispatch } = useContext(ChatContext)
    const [textInput, setTextInput] = useState('') //Não é recomendavel usar no reducer, pois desencadea varias chadamadas do reducer

    
    //Manda a mensagem para o contexto, e dialogo vai retorna a mensagem
    const handleSendMensage = useCallback((userMensage) => {
        
        dispatch({ type: CHAT_ACTIONS.SEND_MENSAGE, payload: userMensage })
        document.querySelector('#chat-input').value = ''
        setTextInput('')

    }, [dispatch])

    //Verifica se o usuario aperta enter no input
    const enterKeyPress = (e, userMensage) => {
        if (e.keyCode === 13 && userMensage !== '') handleSendMensage(userMensage)
    }

    return (
        <div className='chat-footer'>
            <input
                id='chat-input'
                type='text'
                onChange={(e) => { setTextInput(e.target.value) }}
                placeholder='Escreva sua menssagem!'
                onKeyDown={(e) => enterKeyPress(e, textInput)}
            />
            <button
                id="send-button"
                className={(textInput !== '') ? '' : 'disabled'}
                disabled={(textInput !== '') ? false : true}
                onClick={() => handleSendMensage(textInput)}
            >
                <SendIcon />
            </button>
        </div>
    )
}

export { ChatFooter }