const express=require("express")
const app=express()
const cors=require("cors")
const axios=require("axios")
let todo=[]
axios.get("https://dummyjson.com/todos").then(function(response){
    todo=response.data.todos
})
app.use(cors())
app.get("/todos",(req,res)=>{
    res.status(200).json(todo);
})

app.get("/todo/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const foundTodo = todo.find(todo => todo.id === id);
    
    if (foundTodo) {
        res.status(200).json(foundTodo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
})
app.listen(3000,()=>{
    console.log("listening at 3000")})