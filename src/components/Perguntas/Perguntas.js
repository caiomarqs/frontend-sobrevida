import React, { useState } from 'react';

import constants from '../../constants/texts'
import { ExpandArrow } from '../Icons';

const Perguntas = () => {
  const [selectedQuestion, toggleQuestion] = useState(-1);

  function openQuestion(index) {
    toggleQuestion(selectedQuestion === index ? -1 : index);
  }

  const perguntas = getPerguntas();

  function getPerguntas() {
    const perguntas = [
      {
        pergunta: constants["perguntas.pergunta1"],
        resposta: constants["perguntas.resposta1"]
      },
      {
        pergunta: constants["perguntas.pergunta2"],
        resposta: constants["perguntas.resposta2"]
      },
      {
        pergunta: constants["perguntas.pergunta3"],
        resposta: constants["perguntas.resposta3"]
      },
      {
        pergunta: constants["perguntas.pergunta4"],
        resposta: constants["perguntas.resposta4"]
      },
      {
        pergunta: constants["perguntas.pergunta5"],
        resposta: constants["perguntas.resposta5"]
      },
      {
        pergunta: constants["perguntas.pergunta6"],
        resposta: constants["perguntas.resposta6"]
      },
      {
        pergunta: constants["perguntas.pergunta7"],
        resposta: constants["perguntas.resposta7"]
      },
    ];
    return perguntas;
  }

  return (
    <div>
      {
        perguntas.map(({ pergunta, resposta }, index) => (
          <div key={index} className={`pergunta-container ${selectedQuestion === index ? 'open' : ''}`}>
            <div className='pergunta-title' onClick={() => openQuestion(index)}>
              <h6>{pergunta}</h6>
              <ExpandArrow />
            </div>
            <p className='resposta-content'>{resposta}</p>
          </div>
        ))
      }
    </div>
  )
}

export { Perguntas };