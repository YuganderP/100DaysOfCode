import React from 'react'
import { useRecoilState } from 'recoil'
import { constAtom } from '../assets/atoms/count'
function Buttons() {
    const [count,setCount] = useRecoilState(constAtom)
    
    return (
    <>

    <button onClick={()=>{setCount((e)=>e+1)}}>
        Increment
    </button>
        <button onClick={()=>{setCount((e)=>e-1)}}>
            Decrement
        </button>
    </>
  )
}

export default Buttons