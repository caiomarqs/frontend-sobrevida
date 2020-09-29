import React, { useContext, useEffect } from 'react'

import { FormHeader } from './FormHeader'
import { FormFooter } from './FormFooter'
import { ComponentsContext, COMPONENTS_ACTIONS } from '../../contexts'

const FormPage = ({formStyle, brandStyle, imgSrc, ...props }) => {

    const { dispatch } = useContext(ComponentsContext)

    useEffect(() => {
        document.title = 'sobreVida | Cadastro'
        dispatch({ type: COMPONENTS_ACTIONS.DISABLE_HOME_COMPONENTS })
    }, [dispatch])


    return (
        <div className="form-page">
            <div className="left-container"></div>
          
            <div id='form-content' className={`${formStyle}`}>
                <FormHeader />
                {props.children}
            </div>
            <div className={`right-container ${brandStyle}`}>
                {props.textBrandContainer}
                <img alt={imgSrc} src={require(`../../assets/img/${imgSrc}`)}></img>
            </div>
        </div>
    )
}

export { FormPage, FormFooter }