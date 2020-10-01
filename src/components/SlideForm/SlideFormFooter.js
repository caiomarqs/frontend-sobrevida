import React, { useContext } from 'react'
import { SlideFormContex, SLIDE_FORM_ACTIONS } from '../../contexts'
import { ArrowIcon } from '../Icons'

const SlideFormFooter = (props) => {

    const { slideFormState, dispatch } = useContext(SlideFormContex)
    const { activeSlide } = slideFormState
    const { slides } = props


    const prevClick = () => {
        dispatch({ type: SLIDE_FORM_ACTIONS.PREVIOUS_SILDE })
    }

    const nextClick = () => {
        dispatch({ type: SLIDE_FORM_ACTIONS.NEXT_SILDE })
    }

    return (
        <div className='slideform-footer-container'>
            <button 
                id='prev-btn' 
                disabled={activeSlide === 0}
                onClick={() => prevClick()}
            >
                <i><ArrowIcon /></i>
                <span>Voltar</span>
            </button>
            <ul className='slides-count'>
                {
                    slides.map((slide, index) => {
                        return (
                            <li
                                key={index}
                                id={`slide-circle-${index}`}
                                className={activeSlide === index ? 'active' : ''}
                            />
                        )
                    })
                }
            </ul>
            <button 
                id='next-btn' 
                disabled={activeSlide === slides[slides.length - 1].props.index}
                onClick={() => nextClick()}
            >
                <span>Avançar</span>
                <i><ArrowIcon /></i>
            </button>
        </div>
    )
}

export { SlideFormFooter }