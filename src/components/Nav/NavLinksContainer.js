import React, { useContext } from 'react'

import constants from '../../constants/texts'
import { Button } from '../Button'
import { NavLink } from './NavLink'
import { OverMenuContext, OVER_MENU_ACTIONS } from '../../contexts'

const NavLinksContainer = ({ isOver, ...props }) => {

    const { dispatch } = useContext(OverMenuContext)

    const handleClick = (hash) => {
        if (isOver) {
            dispatch({ type: OVER_MENU_ACTIONS.OPEN_CLOSE })
            document.querySelector('body').style.overflow = 'unset'

            //Presisou do settimout pra dar tempo de aparecer o scroll
            setTimeout(() => {
                //Scrola até a div passada
                window.scrollTo(0, document.querySelector(hash).offsetTop - 95)
            }, 100)

        }
    }

    return (
        <>
            <ul className="menu-items" {...props}>
                <li><NavLink hash="/#doe-section" value={constants["nav.button1"]} activeDivs={['#doe-section', '#para-quem-section']} onClick={() => handleClick('#doe-section')} /></li>
                <li><NavLink hash="/#charts-section" value={constants["nav.button2"]} activeDivs={['#charts-section']} onClick={() => handleClick('#charts-section')} /></li>
                <li><NavLink hash="/#depoimentos-section" value={constants["nav.button3"]} activeDivs={['#depoimentos-section']} onClick={() => handleClick('#depoimentos-section')} /></li>
                <li><NavLink hash="/#duvidas-section" value={constants["nav.button4"]} activeDivs={['#duvidas-section', '#chat-brand-section']} onClick={() => handleClick('#duvidas-section')} /></li>
            </ul>
            {
                isOver 
                && 
                <>
                    <Button className="solid-button-primary over-button" value="seja um doador" href='/register'/>
                    <Button className="outline-button-primary over-button" value="Faça o seu login" href='/login'/>
                </>
                }
        </>

    )
}

export { NavLinksContainer }