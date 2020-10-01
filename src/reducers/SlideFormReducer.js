import { SLIDE_FORM_ACTIONS } from '../contexts'

const SlideFormReducer = (state, action) => {
    switch (action.type) {
        case SLIDE_FORM_ACTIONS.NEXT_SILDE: {
            const { activeSlide, ...otherStates } = state
            return { activeSlide: activeSlide + 1, ...otherStates }
        }
        case SLIDE_FORM_ACTIONS.PREVIOUS_SILDE: {
            const { activeSlide, ...otherStates } = state
            return { activeSlide: activeSlide - 1, ...otherStates }
        }
        default:
            return state
    }
}

export { SlideFormReducer }