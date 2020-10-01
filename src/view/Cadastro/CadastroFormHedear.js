import React, { useContext } from 'react'
import { SlideFormContex } from '../../contexts'

const CadastroFormHeader = ({ texts = [], ...props }) => {

    const { slideFormState } = useContext(SlideFormContex)

    return (
        <div className='cadastro-form-header'>
            <h2>Registre sua vontade</h2>
            {
                texts.map((text, index) => {
                    return slideFormState.activeSlide === index && <p key={index}>{text}</p>
                })
            }
        </div>
    )
}

export { CadastroFormHeader }