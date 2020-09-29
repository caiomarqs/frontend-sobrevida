import React from 'react'

import constants from '../../constants/texts'

const ParaQuemSection = () => {
    return (
        <section id="para-quem-section">
            <div className="container">
                <div id="para-quem-contetudo">
                    <h3>{constants['paraquemSection.titulo']}</h3>
                    <p>{constants['paraquemSection.conteudo']}</p>
                    {/* <Button value="Outra Info" className="outline-button-primary"/> */}
                </div>
                <div id="para-quem-img">
                    <img alt="Abrece a vida" src={`${require('../../assets/img/womanhug.png')}`}></img>
                </div>
            </div>
        </section>
    )
}

export { ParaQuemSection }