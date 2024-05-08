
import { CountContext } from "./CreateContext";
import {useState} from 'react'

const ContextProvider =({children})=>{
    const [count,setCount]=useState(0)
    return(
        <CountContext.Provider value={{count,setCount}}>
            {children}
        </CountContext.Provider>
    )
}

export default ContextProvider