import { AUTH_ACTIONS } from "../contexts";

const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_SESSION:
            return { ...state, isAuth: true, token: action.payload }
        case AUTH_ACTIONS.LOG_OUT:
            return { ...state, isAuth: false, token: '' }
        default:
            return state
    }
}

export { authReducer }