import React, { useContext } from 'react'

import { SlideFormContex } from '../../contexts'
import { SlideFormFooter } from './SlideFormFooter'

const SlideForm = (props) => {

    const { slideFormState } = useContext(SlideFormContex)
    const { activeSlide } = slideFormState

    return (
        <div id="slide-form">
            <div className='slides-container'>
                {
                    props.children[activeSlide]
                }
            </div>
            <SlideFormFooter slides={props.children} />
        </div>
    )
}

export { SlideForm }
export * from './Silde'