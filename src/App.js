import React from 'react';

import { Routes } from './routes'
import { AuthProvider } from './contexts';

import './_sass/styles.scss';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App;