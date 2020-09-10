import React, { useContext, useEffect, useState } from 'react'

import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import { DialogContainer } from './DialogContainer'
import { sendQuestion } from '../../services'


const ChatDialog = (props) => {

    const { chatState, dispatch } = useContext(ChatContext)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (chatState.allMessages.length === 0) {

            sendQuestion('').then(res => {

                setLoading(false)
                let JSONresponse = JSON.parse(JSON.stringify(res))
               
                dispatch(
                    {
                        type: CHAT_ACTIONS.SEND_MESSAGE,
                        payload: [{ user: 'bot', value: JSONresponse.data["output"]["text"][0] }]
                    }
                )

            }).catch(err => {
                setLoading(false)
                console.error(err)

                dispatch(
                    {
                        type: CHAT_ACTIONS.SEND_MESSAGE,
                        payload: [{ user: 'bot', value: "Não estou conseguindo responder no momento" }]
                    }
                )
            })
        }
        else setLoading(false)

        //Quando tiver uma atualização nas mensagens, ira rolar o dialago
        const thisObject = document.querySelector("#chat-dialog");
        thisObject.scrollTop = thisObject.scrollHeight;

    }, [chatState.allMessages, dispatch])



    return (
        <div className='chat-dialog' id='chat-dialog'>
            {
                loading
                    ? <span>Carregando...</span>
                    : chatState.allMessages.map((message, index) => {
                        return <DialogContainer message={message} key={index} />
                    })
            }
            {
                chatState.loadingMessage
                    ? <span>Repondendo...</span>
                    : null
            }
        </div>
    )
}

export { ChatDialog }