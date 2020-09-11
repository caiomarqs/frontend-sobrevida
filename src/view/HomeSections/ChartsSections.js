import React from 'react'

import constants from '../../constants/texts'
import { Chart } from '../../components'

const ChartsSection = () => {
    return (
        <section id="charts-section">
            <div className="container">
                <div id="charts-content">
                    <Chart />
                </div>
                <div id="charts-text">
                    <h3>{constants['chart.titulo']}</h3>
                    <p>{constants['chartsSection.p']}</p>
                </div>
            </div>
        </section>
    )
}

export { ChartsSection }