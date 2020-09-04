import React from 'react'

import { Button } from '../../components'
import constants from '../../constants/texts'

const PrincipalSection = () => {
    return (
        <section id="principal-section">
            <div className="container">
                <div className="principal-conteudo">
                    <h4>{constants["principal.titulo"]}</h4>
                    <p>{constants["principal.msg1"]}</p>
                    <Button className="solid-button-secondary" value="Seja um doador"/>
                </div>
                <img alt="Abraçando corações" src={require('../../assets/img/principal-img.svg')}></img>
            </div>
        </section>
    )
}

export { PrincipalSection }