import React, { useReducer, createContext } from 'react';

import { overMenuReducer } from '../reducers'

const OverMenuContext = createContext();

const INITIAL_STATE = {
    isOpen: false
}

const OVER_MENU_ACTIONS = {
    OPEN_CLOSE: 'OPEN_CLOSE'
}

const OverMenuProvider = (props) => {
    
    const [overMenuState, dispatch] = useReducer(overMenuReducer, INITIAL_STATE)

    return (
        <OverMenuContext.Provider value={{ overMenuState, dispatch }}>
            {props.children}
        </OverMenuContext.Provider>
    )
}

export { OverMenuContext, OverMenuProvider, OVER_MENU_ACTIONS }