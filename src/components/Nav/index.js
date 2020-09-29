import React, { useState, useEffect, useContext } from 'react'

import { Button } from '../Button'
import { LogoFull } from '../Icons'
import { NavLinksContainer } from './NavLinksContainer'
import { HambugerMenu } from '../OverMenu/HambugerMenu'
import { ComponentsContext } from '../../contexts'

const Nav = () => {

    const [style, setStyle] = useState('fixed-top')
    const { componentsState } = useContext(ComponentsContext)

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

        //Run once
        handleScroll();

        document.addEventListener('scroll', handleScroll)

        //willDismout
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <>
            { 
                componentsState.homeHeader 
                && 
                <nav className={style}>
                    <a className="navbar-brand" href="/">
                        <LogoFull id="nav-logo" />
                    </a>
                    <NavLinksContainer />
                    <Button id="nav-button" className="solid-button-primary nav-button" value="seja um doador" />
                    <HambugerMenu />
                </nav>
            }
        </>
    )
}

export { Nav };