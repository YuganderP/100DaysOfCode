import React from 'react'
import { countContext } from './countContext'
import { useState } from 'react'
import First from './Components/First'
function App() {
  const [count,setCount]=useState(0)
  return (
    <div>
      <countContext.Provider value={{count,setCount}} />
    <First />

    </div>
  )
}

export default App