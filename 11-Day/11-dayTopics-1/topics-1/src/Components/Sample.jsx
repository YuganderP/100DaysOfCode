import React from  'react'
 function Hello({text}){
    console.log(text)
    return(
        <>
        <p>{text}</p>
        
        </>
    )
}

const Sample = React.memo(Hello)
export default Sample