import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

const orgao = ['Coração', 'Figado', 'Pulmão', 'Pâncreas', 'Rim', 'Córnea'];
const nTransp = [148, 979, 35, 61, 2409, 3963];
const listEspera = [266, 990, 209, 363, 27027, 12234];

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: [orgao[0]],
                datasets: [
                    {
                      label: 'Número de transplantes',
                      data: [nTransp[0]],
                    },
                    {
                      label: 'Pacientes por lista de espera',
                      data: [listEspera[0]],
                      backgroundColor: '#c4c4c4'
                    }
                ]
            }
        }
    }


changeOrgao = (i, j, k) => {
    this.setState({
        chartData:{
            labels: [orgao[i]],
            datasets: [
                {
                label: 'Número de transplantes',
                data: [nTransp[j]]
                },
                {
                label: 'Pacientes por lista de espera',
                data: [listEspera[k]],
                backgroundColor: '#c4c4c4'
                }
            ]
        }
    })
}

    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        labels: {
                            fontStyle: 'bold'
                        },
                        title: {
                            display: true,
                            fontColor: '#000000',
                            fontSize: 14,
                            text: 'Comparação entre Transplantes e Pacientes ativos por Lista de Espera.'
                        }
                    }
                }
                />
                <button onClick={() => this.setState(this.changeOrgao(0,0,0))}>Coração</button>
                <button onClick={() => this.setState(this.changeOrgao(1,1,1))}>Figado</button>
                <button onClick={() => this.setState(this.changeOrgao(2,2,2))}>Pulmão</button>
                <button onClick={() => this.setState(this.changeOrgao(3,3,3))}>Pâncreas</button>
                <button onClick={() => this.setState(this.changeOrgao(4,4,4))}>Rim</button>
                <button onClick={() => this.setState(this.changeOrgao(5,5,5))}>Córnea</button>
            </div>
        )
    }
}

export default Chart;
