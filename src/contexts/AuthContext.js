import React, { createContext, useEffect, useReducer } from 'react'
import { useCookies } from 'react-cookie'

import { authReducer } from '../reducers'

const Authcontext = createContext()

const AUTH_ACTIONS = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',
    SET_SESSION: 'SET_SESSION'
}

const initalState = {
    isAuth: false,
    token: ''
}

const AuthProvider = (props) => {

    const [authState, dispatch] = useReducer(authReducer, initalState)
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])

    useEffect(() => {
        if (cookie.token) {
            dispatch({ type: AUTH_ACTIONS.SET_SESSION, payload: cookie.token })
        }
    }, [cookie, setCookie, removeCookie])

    return (
        <Authcontext.Provider value={{ authState, dispatch }}>
            {props.children}
        </Authcontext.Provider>
    )
}

export { Authcontext, AuthProvider, AUTH_ACTIONS }