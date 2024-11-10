const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
const axios=require("axios")
let todo=[]
axios.get("https://dummyjson.com/todos").then(function(response){
    todo=response.data.todos
})
app.get("/todo",(req,res)=>{
    const id=req.query.id;
    if(isNaN(id)){
        res.status(200).json(todo)
    }
    todo=todo.find(todo=>(todo.id===id))
    res.status(200).json(todo)
})
app.listen(3000,console.log("listening at 3000"))