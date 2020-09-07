import { CHAT_ACTIONS } from '../contexts'

const chatReducer = (state, action) => {
    switch (action.type) {

        case CHAT_ACTIONS.OPEN:
            console.log(!state.isOpen)
            return { ...state, isOpen: !state.isOpen }

        case CHAT_ACTIONS.TYPING_MENSAGE:
            return { ...state, userMensage: action.payload }

        case CHAT_ACTIONS.SEND_MENSAGE:
            console.log(state)
            const lastMensages = state.allUserMensages
            return { ...state, allUserMensages: [...lastMensages, action.payload] }

        default:
            return state
    }
}
export { chatReducer }