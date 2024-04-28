import React from 'react'
import { useRecoilValue } from 'recoil'
import { countAtom } from '../store/atoms/count'

function Count() {
    const count = useRecoilValue(countAtom)
//   const [count,setCount]= useRecoilState(countAtom)
  return (
    <div>{count}</div>
  )
}

export default Count