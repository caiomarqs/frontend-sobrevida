import React, { useContext, useEffect, useState } from 'react'
import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import axios from 'axios'

const ChatDialog = (props) => {

    const { chatState, dispatch } = useContext(ChatContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (chatState.allMessages.length === 0) {
            axios
                .get('https://sobrevida-backend-dev.herokuapp.com/watson', { params: { question: '' } })
                .then(response => {

                    setLoading(false)
                    let JSONresponse = JSON.parse(JSON.stringify(response))

                    dispatch({
                        type: CHAT_ACTIONS.SEND_MESSAGE,
                        payload: [{ user: 'bot', value: JSONresponse.data["output"]["text"] }]
                    })

                })
                .catch(err => {
                    setLoading(false)
                    console.error(err)

                    dispatch({
                        type: CHAT_ACTIONS.SEND_MESSAGE,
                        payload: [{ user: 'bot', value: "Não estou conseguindo responder no momento" }]
                    })

                })
        }
        else {
            setLoading(false)
        }

        //Quando tiver uma atualização nas mensagens, ira rolar o dialago
        var thisObject = document.querySelector("#chat-dialog");
        thisObject.scrollTop = thisObject.scrollHeight;

    }, [chatState.allMessages, dispatch])



    return (
        <div className='chat-dialog' id='chat-dialog'>
            {loading
                ? <span>Carregando...</span>

                : chatState.allMessages.map((message, index) => {
                    return (
                        <div key={index} className={`dialog-container ${message.user !== 'bot' ? 'user' : 'bot'}`}>
                            <span>{message.user}</span>
                            <p>{message.value}</p>
                        </div>
                    )
                })
            }
            {chatState.loadingMessage
                ? <span>Carregando...</span>
                : null
            }
        </div>
    )
}

export { ChatDialog }