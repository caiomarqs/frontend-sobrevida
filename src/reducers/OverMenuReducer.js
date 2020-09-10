import { OVER_MENU_ACTIONS } from '../contexts'

const overMenuReducer = (state, action) => {
    switch (action.type) {
        case OVER_MENU_ACTIONS.OPEN_CLOSE:
            return { isOpen: !state.isOpen }
        default:
            return state
    }
}

export { overMenuReducer }