import React from "react"
export function TextComponent({props}){
    console.log(props)
    return(
        <React.Fragment>
            <p>My name is {props.message}</p>
            <p>Sample text when means nothing</p>
        </React.Fragment>
    )
}