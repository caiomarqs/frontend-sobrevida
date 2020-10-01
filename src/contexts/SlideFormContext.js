import React, { createContext, useReducer } from 'react'
import { SlideFormReducer } from '../reducers'

const SlideFormContex = createContext()

const SLIDE_FORM_ACTIONS = {
    NEXT_SILDE: 'NEXT_SILDE',
    PREVIOUS_SILDE: 'PREVIOUS_SILDE',
}

const initialState = {
    activeSlide: 0
}

const SlideFormProvider = (props) => {

    const [slideFormState, dispatch] = useReducer(SlideFormReducer, initialState)

    return (
        <SlideFormContex.Provider value={{ slideFormState, dispatch }}>
            {props.children}
        </SlideFormContex.Provider>
    )
}


export { SlideFormContex, SLIDE_FORM_ACTIONS, SlideFormProvider }