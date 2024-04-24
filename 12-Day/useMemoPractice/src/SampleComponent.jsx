import React from 'react'

function SampleComponent({data}) {
  return (
    <div>{data}</div>
  )
}

export default React.memo( SampleComponent)