import React from 'react'

import { Logo } from '../Icons'

const FormHeader = () => {
    return (
        <div id="form-header">
            <a href="/">
                <Logo id="form-header-logo" />
            </a>
        </div>
    )
}

export { FormHeader }