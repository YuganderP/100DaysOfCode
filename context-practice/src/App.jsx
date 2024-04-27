import React from 'react'
import Count from './Count'
import ContextProvider from './ContextProvider'

import Buttons from './Buttons'
function App() {
  return (
    <div>
<ContextProvider>
  <Count />
  <Buttons />
  </ContextProvider>
    </div>
    )
}

export default App