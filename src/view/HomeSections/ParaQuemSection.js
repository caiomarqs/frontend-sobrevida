import React from 'react'

import constants from '../../constants/texts'
import { Button } from '../../components'

const ParaQuemSection = () => {
    return (
        <section id="para-quem-section">
            <div className="container">
                <div id="para-quem-contetudo">
                    <h3>{constants['paraquemSection.titulo']}</h3>
                    <p>{constants['paraquemSection.conteudo']}</p>
                    <Button value="Outra Info" className="outline-button-primary"/>
                </div>
                <div id="para-quem-img">
                    <p>arte marota</p>
                </div>
            </div>
        </section>
    )
}

export { ParaQuemSection }