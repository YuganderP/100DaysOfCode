import React, { Children } from 'react'

function Buttons({sample}) {
  console.log(sample)
  return (
 <>
    <button onClick={()=>{sample()}}>Change state</button>
    
 </>
  )
}

export default React.memo(Buttons)