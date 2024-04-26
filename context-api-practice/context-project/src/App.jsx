import React from 'react'
import UserContextProvider from './ContextProvider'
import Firstcomponent from './Components/Firstcomponent'
import SecondComponent from './Components/Secondcomponent'

function App() {
  return (
  <UserContextProvider>
    <h1>Hello world</h1>
    <Firstcomponent/>
    <SecondComponent />
  </UserContextProvider>  
  )
}

export default App