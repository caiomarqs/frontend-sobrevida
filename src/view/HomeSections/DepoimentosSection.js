import React from 'react'

import constants from '../../constants/texts'
import { Depoimento } from '../../components'

const DepoimentosSection = () => {
    return (
        <section id="depoimentos-section">
            <div className="container">
                <h3>{constants['depoimentosSection.titulo']}</h3>
                <p>{constants['depoimentosSection.subTitulo']}</p>
                <div id="depoimentos-container">
                    <Depoimento img={require('../../assets/img/XzAwNjI1NzYuanBn.png')} title={constants['depoimento1.titulo']} subTitle={constants['depoimento1.subTitulo']} body={constants['depoimento1.body']}/>
                    <Depoimento img={require('../../assets/img/XzA1NjQwNzUuanBn.jpg')} title={constants['depoimento2.titulo']} subTitle={constants['depoimento2.subTitulo']} body={constants['depoimento2.body']}/>
                    <Depoimento img={require('../../assets/img/XzA0MjI1MDQuanBn.jpg')} title={constants['depoimento3.titulo']} subTitle={constants['depoimento3.subTitulo']} body={constants['depoimento3.body']}/>
                    <Depoimento img={require('../../assets/img/XzA2NDA5MTcuanBn.png')} title={constants['depoimento4.titulo']} subTitle={constants['depoimento4.subTitulo']} body={constants['depoimento4.body']}/>
                    <Depoimento img={require('../../assets/img/XzA1NjE2MDYuanBn.png')} title={constants['depoimento5.titulo']} subTitle={constants['depoimento5.subTitulo']} body={constants['depoimento5.body']}/>
                </div>
            </div>
        </section>
    )
}

export { DepoimentosSection }