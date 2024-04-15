import React from 'react'
import {useEffect} from 'react'
import { useState } from 'react'
import Notes from './Notes';
import axios from 'axios';
function Display() {
    const [state,setState]=useState(1)
    const [sample,setSample]=useState("")
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${state}`)
        .then(function(response){
            console.log(response.data.title)

            setSample(response.data.title)
        })
    
    },[state])

    return (
    <div>
        <h1>Data id: {state}</h1>
        <Notes data={sample}/>
    <button onClick={()=>{setState(state+1)}}>change the state</button>
    
    </div>
    
    )
}

export default Display