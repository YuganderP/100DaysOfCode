import React from 'react'
import ReactDOM from 'react-dom/client'
import {books} from "./data"
import Container from './Container'
function Sample(){
{
  
}
    return(
        <>
        <Container data={books} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Sample />)
