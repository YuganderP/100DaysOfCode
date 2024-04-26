import React from 'react'
import Third from './Third'

function Second() {
  return (
    <div style={{border:"1px solid red",margin:"10px"}}>
        <h1>Inside Second component</h1>
<Third />

    </div>
  )
}

export default Second