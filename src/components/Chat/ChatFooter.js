import React, { useContext, useCallback, useState } from 'react'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { SendIcon } from '../Icons'
import { sendQuestion } from '../../services'

const ChatFooter = () => {

    const { chatState, dispatch } = useContext(ChatContext)
    const [textInput, setTextInput] = useState('') //Não é recomendavel usar no reducer, pois desencadea varias chadamadas do reducer

    //Verifica se o usuario aperta enter no input
    const enterKeyPress = (e, userMessage) => {
        if (e.keyCode === 13 && userMessage !== '') handleSendMessage(userMessage)
    }

    //Manda a mensagem para o contexto, e dialogo vai retorna a mensagem
    const handleSendMessage = useCallback((userMessage) => {
        
        dispatch({ type: CHAT_ACTIONS.INIT_SEND_MESSAGE })

        if (chatState.allMessages.length > 0) {

            sendQuestion(userMessage).then(res => {
                let JSONresponse = JSON.parse(JSON.stringify(res))

                const botMessage = JSONresponse.data["output"]["text"].length === 0
                    ? 'Eu não entendi. Você pode tentar reformular a frase.'
                    : JSONresponse.data["output"]["text"][0]

                dispatch({
                    type: CHAT_ACTIONS.SEND_MESSAGE,
                    payload: [
                        { user: 'Você', value: userMessage },
                        { user: 'bot', value: botMessage }
                    ]
                })

                dispatch({ type: CHAT_ACTIONS.END_SEND_MESSAGE })
            }).catch(err => {
                console.error(err)

                dispatch({
                    type: CHAT_ACTIONS.SEND_MESSAGE, payload: [
                        { user: 'Você', value: userMessage },
                        { user: 'bot', value: 'Ops, não to conseguindo pensar' }
                    ]
                })

                dispatch({ type: CHAT_ACTIONS.END_SEND_MESSAGE })
            })
        }

        document.querySelector('#chat-input').value = ''
        setTextInput('')

    }, [chatState.allMessages, dispatch])


    return (
        <div className='chat-footer'>

            <input
                autoComplete='off'
                id='chat-input'
                onChange={(e) => { setTextInput(e.target.value) }}
                onKeyDown={(e) => enterKeyPress(e, textInput)}
                placeholder='Escreva sua menssagem!'
                type='text'
            />

            <button
                className={(textInput !== '') ? '' : 'disabled'}
                disabled={(textInput !== '') ? false : true}
                id="send-button" type='submit'
                onClick={() => handleSendMessage(textInput)}
            >
                <SendIcon />
            </button>

        </div>
    )
}

export { ChatFooter }