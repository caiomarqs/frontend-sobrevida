import React, { useState, useEffect } from 'react'

import constants from '../../constants/texts'
import { NavLink } from './NavLink'
import { Button } from '../Button'
import { LogoFull } from '../Icons'

const Nav = () => {

    const [style, setStyle] = useState('fixed-top')

    //didMount
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {

                setStyle(s => {
                    if (s !== `fixed-top scrolled`) {
                        return `${s} scrolled`
                    }
                    return s
                })
            }
            else {
                setStyle(`fixed-top`)
            }
        }

        document.addEventListener('scroll', handleScroll)

        //willDismout
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <nav className={style}>
            <a className="navbar-brand" href="/">
                <LogoFull id="nav-logo" />
            </a>
            <ul className="menu-items">
                <li><NavLink hash="#doe-section"          value={constants["nav.button1"]} activeDivs={['#doe-section', '#para-quem-section']} /></li>
                <li><NavLink hash="#charts-section"       value={constants["nav.button2"]} activeDivs={['#charts-section']}/></li>
                <li><NavLink hash="#depoimentos-section"  value={constants["nav.button3"]} activeDivs={['#depoimentos-section']}/></li>
                <li><NavLink hash="#duvidas-section"      value={constants["nav.button4"]} activeDivs={['#duvidas-section', '#chat-brand-section']}/></li>
            </ul>
            <Button className="solid-button-primary nav-button" value="seja um doador" />
        </nav>
    )
}

export { Nav };