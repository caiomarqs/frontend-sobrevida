import { COMPONENTS_ACTIONS } from '../contexts'

const componentsReducer = (state, action) => {
    switch (action.type) {
        case COMPONENTS_ACTIONS.DISABLE_HOME_COMPONENTS:
            console.log('oi')
            return { footer: !state.footer, homeHeader: !state.homeHeader };
        default:
            return state;
    }
}

export { componentsReducer }