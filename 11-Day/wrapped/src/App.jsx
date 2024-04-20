import React from 'react'
import { useState } from 'react'
import Sample from './Components/Sample';
import Component from './Components/Component';
function App(){

return(
  <>
  <h1>Wrapper Component Practice</h1>
  <Component>
 <Sample />

  </Component>
  </>
)

}

export default App;