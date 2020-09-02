import React from 'react';

import { Home } from './view';
import { Nav } from './components';
import Chart from './components/Chart/Chart'
import Perguntas from './components/Perguntas/Perguntas'

import './_sass/styles.scss';

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Chart />
      <Perguntas />
    </>
  )
}

export default App;
