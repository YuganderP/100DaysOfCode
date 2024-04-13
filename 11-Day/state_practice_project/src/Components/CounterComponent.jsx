import React from "react"
export function CounterComponent({props}){
console.log(props)
    return (
        <>  
        <h1>{props.count}</h1>
        <p>{props.message}</p>
        </>
    )


}