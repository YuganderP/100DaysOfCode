import React from 'react'
import { useContext } from 'react'
import UserContext from '../userContext'
function Firstcomponent() {
  const {count}=useContext(UserContext)
    return (
    <div>
        <p>{count[0]}</p>
        <p>{count[1]}</p>
    </div>
  )
}

export default Firstcomponent