import React, { useEffect, useState, useContext } from 'react'

import { ChatIcon } from '../Icons';
import { ChatContext, CHAT_ACTIONS } from '../../contexts'

const ChatButton = (props) => {

    const [bottomPosition, setBottomPosition] = useState({})
    const { dispatch } = useContext(ChatContext)

    useEffect(() => {
        //Controlador para apagar Listener/Promisse quando o componente for desmontado, 
        //ciclo de vida do componente e garbage colector ***Ver 
        let monted = true

        const stopPosition = () => {
            //Pega a posicao do topo do footer
            const footerTopPosition = document.querySelector('footer').offsetTop
            //Pega a posição final da tela no scroll
            const scrollTop = window.scrollY + window.innerHeight;
            //Faz a diferenca das posicoes, quando o footer aparece a diferenca fica positiva
            const difference = scrollTop - footerTopPosition;
            //O valor do bottom
            const bottomValue = scrollTop > footerTopPosition ? difference + 32 : '2rem';

            setBottomPosition({ bottom: bottomValue })
        }


        if (monted === true) document.addEventListener('scroll', stopPosition)

        return (() => {
            //Se o component for desmontado ele remove o Listener
            monted = false
            if (monted === false) document.removeEventListener('scroll', stopPosition)
        })

    }, [])

    return (
        <div id='chat-button-container' style={bottomPosition} onClick={() => dispatch({ type: CHAT_ACTIONS.OPEN })}>
            <span id="chat-button" >
                <ChatIcon />
            </span>
            <span className='chat-button-text'>
                <span>Converse com Brubles</span>
            </span>
        </div>
    )
}

export { ChatButton }