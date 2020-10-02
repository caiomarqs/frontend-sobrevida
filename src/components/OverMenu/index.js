import React, { useContext } from 'react'

import { OverMenuContext, OVER_MENU_ACTIONS, } from '../../contexts'
import { CloseIcon } from '../../components'
import { NavLinksContainer } from '../Nav/NavLinksContainer'

const OverMenu = (props) => {

    const { overMenuState, dispatch } = useContext(OverMenuContext)


    const handleClick = () => {
        dispatch({ type: OVER_MENU_ACTIONS.OPEN_CLOSE })
        document.querySelector('body').style.overflow = 'unset'
    }


    if (props.isHome) {
        return (
            <>
                {overMenuState.isOpen ? <div className="over-backdrop" onClick={() => handleClick()} /> : <></>}
                {
                    <div id='over-menu' className={overMenuState.isOpen ? 'open-menu' : ''}>
                        <div>
                            <CloseIcon onClick={() => handleClick()} />
                        </div>
                        <div>
                            <NavLinksContainer isOver={true} />
                        </div>
                    </div>
                }
            </>
        )
    }
    else {
        return (
            <>
                {overMenuState.isOpen ? <div className="over-backdrop" onClick={() => handleClick()} /> : <></>}
                {
                    <div id='over-menu' className={overMenuState.isOpen ? 'open-menu' : ''}>
                        <div>
                            <CloseIcon onClick={() => handleClick()} />
                        </div>
                        <div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export { OverMenu }