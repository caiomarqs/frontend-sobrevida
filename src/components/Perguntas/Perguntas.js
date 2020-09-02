import React, { useState } from 'react';

import constants from '../../constants/texts'

const getPerguntas = () => {
  const perguntas = [
    {
      pergunta: constants["perguntas.pergunta1"],
      resposta: 'Resposta 1'
    },
    {
      pergunta: 'Pergunta 2',
      resposta: 'Resposta 2'
    }
  ];
  return perguntas;
}

const Perguntas = () => {
  const [selectedQuestion, toggleQuestion] = useState(-1);

  function openQuestion(index) {
    toggleQuestion(selectedQuestion === index ? -1 : index);
  }

  const perguntas = getPerguntas();

  return (
    <div>
      <h1>Perguntas Frequentes</h1>
      {

        perguntas.map(({ pergunta, resposta }, index) => (
          <div key={index} className={selectedQuestion === index ? 'open' : ''}>
            <p className='pergunta' onClick={() => openQuestion(index)}>{pergunta}</p>
            <p className='resposta'>{resposta}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Perguntas;