import React from 'react'
import {memo} from 'react'
const  SampleComponent=memo(({data}) =>{
  return (
    <div>
        {data}
    </div>

  )
})

export default SampleComponent