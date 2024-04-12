import React from 'react'
export function CreateTodo(){
    
    return <div>

        <input style={{padding:10,margin:10}} placeholder="title "type="text" id="title"></input>
        <br />
        <input style={{padding:10, margin:10}} placeholder="desciption "type="text" id ="desciption" />
        <br />
        <button>Add a todo</button>
    </div>
}

