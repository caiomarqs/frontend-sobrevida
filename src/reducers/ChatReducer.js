import { CHAT_ACTIONS } from '../contexts'

const chatReducer = (state, action) => {
    switch (action.type) {

        case CHAT_ACTIONS.OPEN:
            return { ...state, isOpen: !state.isOpen }

        case CHAT_ACTIONS.SEND_MESSAGE:
            const lastMessages = state.allMessages
            return { ...state, allMessages: [...lastMessages, ...action.payload] }

        case CHAT_ACTIONS.INIT_SEND_MESSAGE:
            return { ...state, loadingMessage: true }

        case CHAT_ACTIONS.END_SEND_MESSAGE:
            return { ...state, loadingMessage: false }
            
        default:
            return state
    }
}
export { chatReducer }


