import React, { createContext, useEffect, useReducer } from 'react'
import { useCookies } from 'react-cookie'

import { authReducer } from '../reducers'

const Authcontext = createContext()

const AUTH_ACTIONS = {
    LOG_OUT: 'LOG_OUT',
    SET_SESSION: 'SET_SESSION',
    SET_USER_INFOS: 'SET_USER_INFOS'
}

const initalState = {
    isAuth: false,
    token: '',
    user: {},
    id: 0
}

const AuthProvider = (props) => {

    const [authState, dispatch] = useReducer(authReducer, initalState)
    const [cookie, setCookie, removeCookie] = useCookies(['jwt'])

    useEffect(() => {
        if (cookie.token) {
            dispatch({ type: AUTH_ACTIONS.SET_SESSION, payload: { token: cookie.token, id: cookie.id } })
        }
    }, [cookie, setCookie, removeCookie])

    return (
        <Authcontext.Provider value={{ authState, dispatch }}>
            {props.children}
        </Authcontext.Provider>
    )
}

export { Authcontext, AuthProvider, AUTH_ACTIONS }