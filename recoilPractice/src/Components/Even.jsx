import React from 'react'
import { countAtom } from '../store/atoms/count'
function Even() {
const count = useRecoilValue(countAtom)
    return (
        (count%2==0)?<div>{even}</div>:<></>
  )
}

export default Even