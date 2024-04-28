import React from 'react'
import { countAtom } from '../store/atoms/count'
import {useRecoilState} from 'recoil'
function Buttons() {
  const [count,setCount]=useRecoilState(countAtom)
    return (
    
    <>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
  )
}

export default Buttons