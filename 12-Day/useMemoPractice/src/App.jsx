import React from "react";
import {useState,useMemo} from "react"
import SampleComponent from "./SampleComponent";
import Button from "./Buttons";
function App(){
const [state,setState]=useState(0)
const [hello,setHello]= useState("hello")
const data = useMemo(()=>{
  let i=0;
  for(;i<39843+state;i++){};
  return i;
},[state])
  return(
  <>
  hello
  <SampleComponent data={data}/>
  <SampleComponent data={"hello"} />
  <Button sample={()=>{setState(state+1)}}>Change State</Button>
  <div>Current state Value{state}</div>
  <button onClick={()=>{
    setHello(hello + String(state))
  }}>change hello</button>
  </>
)
}
export default App