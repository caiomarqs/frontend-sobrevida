import React from 'react';

import { Home } from './view';
import { Nav } from './components';
import Chart from './components/Chart/Chart'

import './App.css';

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Chart />
    </>
  )
}

export default App;
