import React, { useState, useEffect, useContext } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

import { AUTH_ACTIONS, Authcontext } from '../../contexts'
import { Button } from '../Button'
import { LogoFull } from '../Icons'
import { NavLinksContainer } from './NavLinksContainer'
import { HambugerMenu } from '../OverMenu/HambugerMenu'

const Nav = (props) => {

    const [style, setStyle] = useState('fixed-top')

    const history = useHistory();
    // como da um destructing no array tem q recuperar as varaveis mas não usa
    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])
    const { dispatch } = useContext(Authcontext)

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


    const handleLogOut = () => {
        dispatch({ type: AUTH_ACTIONS.LOG_OUT })
        removeCookie('token')
        history.push('/')
    }


    if (props.isHome) {
        return (
            <nav className={style}>
                <a className="navbar-brand" href="/">
                    <LogoFull id="nav-logo" />
                </a>
                <NavLinksContainer />
                <Button id='nav-button2' className="outline-button-primary nav-button" value="Faça o seu login" href='/login' />
                <Button id="nav-button" className="solid-button-primary nav-button" value="seja um doador" href='/register' />
                <HambugerMenu />
            </nav>
        )
    }
    else {
        return (
            <nav className='fixed-top scrolled'>
                <a className="navbar-brand" href="/">
                    <LogoFull id="nav-logo" />
                </a>
                <div className='nav-middle'></div>
                <button id='log-out-btn' onClick={() => handleLogOut()}>Sair</button>
            </nav>
        )
    }

}

export { Nav };