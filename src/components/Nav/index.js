import React, { useState, useEffect } from 'react'

import constants from '../../constants/texts'
import { Button } from '../Button'
import { LogoFull } from '../Icons'

const Nav = () => {

    const [style, setStyle] = useState('fixed-top')

    //didMount
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                
                setStyle(s => {
                    if(s !== `fixed-top scrolled`){
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
                <LogoFull id="nav-logo"/>
            </a>
            <ul className="menu-items">
                <li><a href="/" >{constants["nav.button1"]}</a></li>
                <li><a href="/" >{constants["nav.button2"]}</a></li>
                <li><a href="/" >{constants["nav.button3"]}</a></li>
                <li><a href="/" >{constants["nav.button4"]}</a></li>
            </ul>
            <Button className="solid-button-primary nav-button" value="seja um doador" />
        </nav>
    )
}

export { Nav };