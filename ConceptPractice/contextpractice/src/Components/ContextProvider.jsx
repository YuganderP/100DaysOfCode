import React from 'react'
import First from './First'
import Second from './Second'
import { Context } from '../Context'
import { useState } from 'react'
function ContextProvider({children}) {
  const [count,setCount]=useState(0)
    return (
   <>
   <Context.Provider value={{count,setCount}}>
      {children}
   </Context.Provider>
   </>
  )
}

export default ContextProvider