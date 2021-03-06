import React, { useContext } from 'react';

import { OverMenuContext, OVER_MENU_ACTIONS } from '../../contexts'

const HambugerMenu = (props) => {

    const { overMenuState, dispatch } = useContext(OverMenuContext)

    const handleHambugerMenu = () => {
        dispatch({ type: OVER_MENU_ACTIONS.OPEN_CLOSE })
        document.querySelector('body').style.overflow = 'hidden'
    }

    return (
        <div id='hambuger-menu' onClick={() => handleHambugerMenu()} className={overMenuState.isOpen ? 'open-menu' : ''} {...props}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export { HambugerMenu }