import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './Components/CreateTodo'
import {DisplayTodo} from './Components/DisplayTodo'
function App() {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    async function fetchTodos(){
     try{
       fetch("http://localhost:3000/todo/all")
.then(async function(res){
  const json = await res.json()
  setTodos(json.todo)
  console.log(json.todo)
})
     }catch(error){
      console.log("error fetching todos")
     }
    }
    fetchTodos()
  },[])
  return (
    <>
  
  <CreateTodo />
  <DisplayTodo todos={todos} />
    </>
  )
}

export default App
