import React, { useReducer, createContext } from 'react'

import { componentsReducer } from '../reducers'

const ComponentsContext = createContext()

const initialState = {
    footer: true,
    homeHeader: true,
    overMenu: true
}

const COMPONENTS_ACTIONS = {
    DISABLE_HOME_COMPONENTS: 'DISABLE_HOME_COMPONENTS'
}

const ComponentsProvider = (props) => {
    
    const [componentsState, dispatch] = useReducer(componentsReducer, initialState)

    return (
        <ComponentsContext.Provider value={{ componentsState, dispatch }}>
            {props.children}
        </ComponentsContext.Provider>
    )
}

export { ComponentsContext, ComponentsProvider, COMPONENTS_ACTIONS }