import React from 'react'

function Book({data}) {
   

    return (

    <div style={{ display:"inline-block", border: '1px solid black', padding: '20px', margin: '20px' }}>
        <img src={data.image}></img>
        <h3>{data.name}</h3>
        <h4>{data.author}</h4>
        <h5>{data.description}</h5>
        <button style={{padding:"6px", border:"1px solid black",borderRadius:"12px",backgroundColor:"#FFFDD0"}}>Add to cart</button>
    </div>
  )
}

export default Book