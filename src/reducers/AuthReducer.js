import { AUTH_ACTIONS } from "../contexts";

const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_SESSION:
            return { ...state, isAuth: true }
        default:
            return state
    }
}

export { authReducer }