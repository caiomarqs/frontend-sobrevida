import React, { useContext, useEffect, useState } from 'react'
import { ChatContext, CHAT_ACTIONS } from '../../contexts'
import axios from 'axios'

//initialTime 
// const getTime = () => {
//     const h = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()
//     const mm = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
//     const m = new Date().getMonth() < 9 ? `0${new Date().getMonth() + 1}` : new Date().getMinutes() + 1
//     const d = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getMinutes()

//     return [`${d}/${m}`, `${h}:${mm}`]
// }

const ChatDialog = (props) => {

    const { chatState, dispatch } = useContext(ChatContext)
    // const [initialTime] = useState([getTime()[0], getTime()[1]])
    const [loading, setLoading] = useState(true)

    //Quando tiver uma atualização nas mensagens, ira rolar o dialago
    useEffect(() => {
        var thisObject = document.querySelector("#chat-dialog");
        thisObject.scrollTop = thisObject.scrollHeight;

        if (chatState.allMessages.length === 0) {
            axios.get('/watson?question').then(response => {
                setLoading(false)
                let JSONresponse = JSON.parse(JSON.stringify(response))
                dispatch({ type: CHAT_ACTIONS.SEND_MESSAGE, payload: [{ user: 'bot', value: JSONresponse.data["output"]["text"] }] })

            }).catch(err => {
                setLoading(false)
                dispatch({ type: CHAT_ACTIONS.SEND_MESSAGE, payload: [{ user: 'bot', value: "Não estou conseguindo responder no momento" }] })
            })
        }
       
        else {
            setLoading(false)
        }

    }, [chatState.allMessages, dispatch])



    return (
        <div className='chat-dialog' id='chat-dialog'>
            {/* <span>Conversa inicida em {initialTime[0]} as {initialTime[1]}</span> */}
            {(loading) ?
                <span>Carregando...</span> :
                chatState.allMessages.map((message, index) => {
                    return (
                        <div key={index} className={`dialog-container ${message.user !== 'bot' ? 'user' : 'bot'}`}>
                            <span>{message.user}</span>
                            <p>{message.value}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export { ChatDialog }