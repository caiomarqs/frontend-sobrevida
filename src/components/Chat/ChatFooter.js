import React, { useContext, useCallback, useState } from 'react'
import axios from 'axios'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { SendIcon } from '../Icons'



const ChatFooter = () => {

    const { chatState, dispatch } = useContext(ChatContext)
    const [textInput, setTextInput] = useState('') //Não é recomendavel usar no reducer, pois desencadea varias chadamadas do reducer


    //Manda a mensagem para o contexto, e dialogo vai retorna a mensagem
    const handleSendMessage = useCallback((userMessage) => {

        if (chatState.allMessages.length > 0) {
            axios.get(`/watson?question=${userMessage}`).then(response => {

                let JSONresponse = JSON.parse(JSON.stringify(response))


                const botMessage = JSONresponse.data["output"]["text"].length === 0 ? 'Eu não entendi. Você pode tentar reformular a frase.': JSONresponse.data["output"]["text"]


                dispatch({ type: CHAT_ACTIONS.SEND_MESSAGE, payload: [{ user: 'Você', value: userMessage }, { user: 'bot', value: botMessage }] })


            }).catch(err => {
                dispatch({ type: CHAT_ACTIONS.SEND_MESSAGE, payload: [{ user: 'Você', value: userMessage }, { user: 'bot', value: 'Ops, não to conseguindo pensar' }] })
            })
        }

        document.querySelector('#chat-input').value = ''
        setTextInput('')
    }, [chatState.allMessages, dispatch])

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