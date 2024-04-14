import React, { useState } from 'react'
import Sample from './Components/Sample'
function App() {
  const [state,setState]= useState("Sample component")
 const [sample,setSample]=useState(0)
  return (
    <div>
      
      App
<Sample text={state} />
<Sample text={"state"} />
<Sample text={"state"} />
<Sample text={"state"} />
<Sample text={"state"} />
<Sample text={"state"} />
<Sample text={"state"} />
<Sample text={"state"} />


<button onClick={()=>{


  setSample(sample+1)
  setState(`hello world ${sample}`)
}}>Click me
</button>
    </div>
  )
}

export default App