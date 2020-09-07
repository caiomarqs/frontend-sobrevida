import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../../contexts'

//initialTime 
const getTime = () => {
    const h = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()
    const mm = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
    const m = new Date().getMonth() < 9 ? `0${new Date().getMonth() + 1}` : new Date().getMinutes() + 1
    const d = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getMinutes()

    return [`${d}/${m}`, `${h}:${mm}`]
}

const ChatDialog = (props) => {

    const { chatState } = useContext(ChatContext)
    const [initialTime] = useState([getTime()[0], getTime()[1]])

    //Quando tiver uma atualização nas mensagens, ira rolar o dialago
    useEffect(() => {
        var thisObject = document.querySelector("#chat-dialog");
        thisObject.scrollTop = thisObject.scrollHeight;

    }, [chatState.allMensages])



    return (
        <div className='chat-dialog' id='chat-dialog'>
            <span>Conversa inicida em {initialTime[0]} as {initialTime[1]}</span>
            {
                chatState.allMensages.map((menssage, index) => {
                    return (
                        <>
                            <div key={index + Math.random()} className='dialog-container bot'>
                                <span>Brubles</span>
                                <p>Oi eu sou a Brubles</p>
                            </div>
                            <div key={index} className={`dialog-container ${menssage.user !== 'bot' ? 'user' : 'bot'}`}>
                                <span>{menssage.user}</span>
                                <p>{menssage.value}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export { ChatDialog }