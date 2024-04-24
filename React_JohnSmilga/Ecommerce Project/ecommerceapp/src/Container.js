import React from 'react'
import Book from './Book'
function Container({data}) {
  {}
    return (
    <div>
        <h2>Books Gallery</h2>
        <div>
           {
            data.map((e,idx)=>{
                
              return  <Book data={e} key={idx}/>
            })
           } 
        </div>
    </div>
  )
}

export default Container