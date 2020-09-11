import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

import constants from '../../constants/texts'

const orgao = [
    constants['chart.button1'],
    constants['chart.button2'],
    constants['chart.button3'],
    constants['chart.button4'],
    constants['chart.button5'],
    constants['chart.button6']
]
const nTransp = [148, 979, 35, 61, 2409, 3963];
const listEspera = [266, 990, 209, 363, 27027, 12234];
const suggests = [
    { min: 0, max: 0 },
    { min: 950, max: 1000 },
    { min: 0, max: 0 },
    { min: 0, max: 0 },
    { min: 0, max: 0 },
    { min: 0, max: 0 }
]

const initialChartData = {
    labels: [orgao[0]],
    datasets: [
        {
            label: constants['chart.label1'],
            data: [nTransp[0]],
            backgroundColor: '#009E73'
        },
        {
            label: constants['chart.label2'],
            data: [listEspera[0]],
            backgroundColor: '#AA0034'
        }
    ],

}

const Chart = (props) => {

    const [chartData, setChartData] = useState(initialChartData)
    const [min, setMin] = useState(suggests[0].min)
    const [max, setMax] = useState(suggests[0].max)

    const changeOrgao = (i, j, k) => {

        const chartData = {
            labels: [orgao[i]],
            datasets: [
                {
                    label: constants['chart.label1'],
                    data: [nTransp[j]],
                    backgroundColor: '#009E73'
                },
                {
                    label: constants['chart.label2'],
                    data: [listEspera[k]],
                    backgroundColor: '#AA0034'
                }
            ]
        }

        setMin(suggests[i].min)
        setMax(suggests[i].max)


        const element = document.querySelector(`#orgao-btn-${i}`)
        const allBtns = document.querySelectorAll('.orgao-btn');

        allBtns.forEach(a => a.classList.remove('active'))

        element.classList.add('active')

        setChartData(chartData)
    }

    return (
        <div className="chart">
            <div className="chart-container">
                <Bar
                    data={chartData}
                    options={{
                        labels: {
                            fontStyle: 'bold',
                            fontFamily: "'Inter', 'sans-serif'",
                        },
                        title: {
                            fontFamily: "'Inter', 'sans-serif'",
                            display: true,
                            fontColor: '#000000',
                            fontSize: 15,
                            padding: 24,
                            text: ''
                        },
                        responsive: true,// matem no tamanho da div pai
                        maintainAspectRatio: false, //não destorce o canvas renderizado
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMin: min,
                                    suggestedMax: max
                                }
                            }]
                        }
                    }
                    }
                />
            </div>

            <div className='controls-conteiner'>
                <span className='orgao-btn active' id="orgao-btn-0" onClick={() => changeOrgao(0, 0, 0)}>{constants['chart.button1']}</span>
                <span className='orgao-btn' id="orgao-btn-1" onClick={() => changeOrgao(1, 1, 1)}>{constants['chart.button2']}</span>
                <span className='orgao-btn' id="orgao-btn-2" onClick={() => changeOrgao(2, 2, 2)}>{constants['chart.button3']}</span>
                <span className='orgao-btn' id="orgao-btn-3" onClick={() => changeOrgao(3, 3, 3)}>{constants['chart.button4']}</span>
                <span className='orgao-btn' id="orgao-btn-4" onClick={() => changeOrgao(4, 4, 4)}>{constants['chart.button5']}</span>
                <span className='orgao-btn' id="orgao-btn-5" onClick={() => changeOrgao(5, 5, 5)}>{constants['chart.button6']}</span>
            </div>
        </div>
    )

}

export { Chart };
