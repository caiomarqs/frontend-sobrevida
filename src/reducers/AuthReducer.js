import { AUTH_ACTIONS } from "../contexts";

const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_SESSION:
            return { ...state, isAuth: true, token: action.payload.token, id: action.payload.id }
        case AUTH_ACTIONS.LOG_OUT:
            return { ...state, isAuth: false, token: '', id: 0, user: {} }
        case AUTH_ACTIONS.SET_USER_INFOS:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export { authReducer }