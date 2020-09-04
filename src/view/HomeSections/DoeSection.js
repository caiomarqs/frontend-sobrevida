import React from 'react'

import constants from '../../constants/texts'

const DoeSection = () => {
    return (
        <section id="doe-section">
            <div className="container">
                <h3>{constants["doeSection.titulo"]}</h3>
                <div className="doe-items-container">
                    <div id="doe-item-1" className="doe-item">
                        <div className="doe-item-img">
                            <img alt="Ato de solidaredade" src={require('../../assets/img/handheart.png')}></img>
                        </div>
                        <h6>{constants['doeSection.titulo.item1']}</h6>
                        <p>{constants['doeSection.conteudo1.item1']}</p>
                        <p>{constants['doeSection.conteudo2.item1']}</p>
                    </div>
                    <div id="doe-item-2" className="doe-item">
                        <div className="doe-item-img">
                            <img alt="Registre sua vontade" src={require('../../assets/img/document.png')}></img>
                        </div>
                        <h6>{constants['doeSection.titulo.item2']}</h6>
                        <p>{constants['doeSection.conteudo1.item2']}</p>
                        <p>{constants['doeSection.conteudo2.item2']}</p>
                    </div>
                    <div id="doe-item-3" className="doe-item">
                        <div className="doe-item-img">
                            <img alt="Ajude a mudar vidas" src={require('../../assets/img/hands.png')}></img>
                        </div>
                        <h6>{constants['doeSection.titulo.item3']}</h6>
                        <p>{constants['doeSection.conteudo1.item3']}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { DoeSection }