import React, { useEffect } from 'react'

import { FormHeader } from './FormHeader'
import { FormFooter } from './FormFooter'

const FormPage = ({formStyle, brandStyle, imgSrc, pageName, ...props }) => {

    useEffect(() => {
        document.title = `sobreVida | ${pageName}`
    }, [pageName])


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