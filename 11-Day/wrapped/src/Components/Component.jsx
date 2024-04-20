import React from 'react'

function Component({children}) {
  
    return (
    <div style={{border:"2px solid black", display:"inline-block"}}>
        {children}
    </div>
  )
}

export default Component