import React from 'react'
import ContextProvider from './ContextProvider'

import Count from './Count'
import Buttons from './Buttons'
function App() {
  return (
    <>
    <ContextProvider>
      <Count />
      <Buttons />
    </ContextProvider>
    </>
  )
}

export default App