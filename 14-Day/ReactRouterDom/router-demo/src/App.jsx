
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import Sample from './Sample'
import Helloworld from './Helloworld'
import { useNavigate } from 'react-router-dom'
const Lazy = React.lazy(()=> import('./Lazy'))

function App() {
  
  return (
    <div>
      
      <BrowserRouter>
      
    <AppBar />
    <Routes>
 
      <Route path="/" element={<Sample />} />
      <Route path="/helloworld" element={<Helloworld />} />
      
     
      <Route path="/lazy" element=
      {
      <React.Suspense fallback={<div>Loading....</div>}>
      <Lazy />
      </React.Suspense>
      } />
    
    </Routes>


    </BrowserRouter>
    </div>
  )
}


function AppBar(){
 const navigate = useNavigate();
  return(
    <div>
      <div style={{backgroundColor:"yellow",color:"black", padding:"20px"}} >
      <h2 >TOP BAR</h2>
      <button style={{backgroundColor:"blue",margin:"10px",color:"white"}} onClick={()=>{
        navigate("/helloworld")
      }}>Hello world</button>
      <button style={{backgroundColor:"blue",margin:"10px",color:"white"}} onClick={()=>{
        navigate("/")
      }}>Landing page</button>
      
<button style={{backgroundColor:"blue",color:"white"}} onClick={()=>{
        navigate("/lazy")
      }}>Lazy</button>

      </div>
    </div>
  )
}


export default App