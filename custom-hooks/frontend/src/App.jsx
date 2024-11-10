import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [todos,setTodo]=useState([])
  useEffect(()=>{
    axios.get("https://shiny-yodel-55pv6ww7x4x2vp9v-3001.app.github.dev/todo").then(
      (response)=>setTodo(response.data)
    )
  },[])
  return (
    <>
    {todos.map(todos=><Todo title={todos.title} description={todos.description}/>)}
    </>
  )
}
function Todo(title,description){
  return<>
    {title}
    {description}
  </>
}
export default App
