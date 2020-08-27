import React from 'react'

import constants from '../../constants/texts'
import './index.css'

const Nav = () => {
    return (
        <header id="nav">
            <h1>{constants["nav.titulo"]}</h1>
        </header>
    )
}

export { Nav };