import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Sample from './Components/Sample'
import Google from './Components/Google'
import Landing from './Components/Landing'
const Lazy = React.lazy(()=>import("./Components/LazyComponent"))
function App() {
  return (
    <>
    <div className="nav" style={{backgroundColor:"yellow",color:"white"}}>
      <a style={{margin:"20px",padding:"10px"}} href="/sample">Home</a>
      <a style={{margin:"20px",padding:"10px"}} href="/Landing">Landing</a>
      <a style={{margin:"20px",padding:"10px"}} href="/Google">Google</a>
      <a style={{margin:"20px",padding:"10px"}} href="/sample">Sample</a>
      <a style={{margin:"20px",padding:"10px"}} href="/lazy">Lazy</a>
    </div>
    <div className='Router'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/sample' element={<Sample/>}> </Route>
      <Route path='/google' element={<Landing/>}> </Route>
      <Route path='/landing' element={<Google/>}> </Route>
      <Route path = '/lazy' element={
        <React.Suspense fallback={<div>Loading.....</div>}>
          <Lazy />
        </React.Suspense>
      } />
      </Routes>
    
    </BrowserRouter>

    </div>
    </>
  )
}

export default App