import React from 'react';

export function DisplayTodo({todos}){
    
    return (
        <div>
            {todos.map((todo)=>(
                
                <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <h3>Status: {todo['completed'].toString()}</h3>
                <button>Change the status</button>
                </div>
            ))}
        </div>
    )
}