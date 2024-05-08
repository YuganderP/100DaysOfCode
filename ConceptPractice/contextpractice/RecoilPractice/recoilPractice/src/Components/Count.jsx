import React from 'react'
import { useRecoilValue } from 'recoil'
import { constAtom } from '../assets/atoms/count'
function Count() {
  const count = useRecoilValue(constAtom)
    return (
    <div>{count}</div>
  )
}

export default Count