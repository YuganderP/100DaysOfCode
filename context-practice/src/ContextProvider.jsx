import React from 'react'
import { UserContext } from './Context'
import {useState} from 'react'


const  ContextProvider=({children})=>{
const [count,setCount]=useState(0);

return (
    <UserContext.Provider value={{count,setCount}}>
        {children}
    </UserContext.Provider>
)


}

export default ContextProvider