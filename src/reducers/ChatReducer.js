import { CHAT_ACTIONS } from '../contexts'

const chatReducer = (state, action) => {
    switch (action.type) {
        case CHAT_ACTIONS.OPEN:
            return { isOpen: !state.isOpen }
        default:
            return state
    }
}

export { chatReducer }