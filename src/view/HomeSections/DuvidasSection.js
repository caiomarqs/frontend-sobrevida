import React from 'react'

import constants from '../../constants/texts'
import { Perguntas } from '../../components'

const DuvidasSection = () => {
    return (
        <section id="duvidas-section">
            <div className="container">
                <h3>{constants['duvidasSection.titulo']}</h3>
                <Perguntas />
            </div>
        </section>
    )
}

export { DuvidasSection }