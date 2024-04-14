import React from "react";
import { useState } from "react";

import { TextComponent } from "./Components/TextComponent";

function App(){

const [sample,setSample]=useState({"message":"sample name"})
  return(
    <>
        <button onClick={()=>{setSample({"message":Math.random()})}}>Change name</button>
    <TextComponent props={sample}></TextComponent>
    
    </>
 
  )
}
export default App;