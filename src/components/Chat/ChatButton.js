import React, { useEffect, useState } from 'react';
import { ChatIcon } from '../Icons';

const ChatButton = (props) => {

    const [bottomPosition, setBottomPosition] = useState({})

    useEffect(() => {

        const stopPosition = () => {
            //Pega a posicao do topo do footer
            const footerTopPosition =  document.querySelector('footer').offsetTop
            //Pega a posição final da tela no scroll
            const scrollTop = window.scrollY + window.innerHeight;
            //Faz a diferenca das posicoes, quando o footer aparece a diferenca fica positiva
            const difference = scrollTop - footerTopPosition;
            //O valor do bottom
            const bottomValue = scrollTop > footerTopPosition ? difference + 32 : '2rem';

            setBottomPosition({bottom: bottomValue})
        }
       
        //5655
        //6628
        document.addEventListener('scroll', stopPosition)

        return (
            document.addEventListener('scroll', stopPosition)
        )
    }, [])

    return (
        <div id='chat-button-container' style={bottomPosition}>
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