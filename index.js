const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var jsonParser = bodyParser.json()
const PORT = 3000
var todos =[]

// Create a new todo
app.post('/api/todo',jsonParser,(req,res)=>{
    try{
        todos.push(req.body)
        res.send("Todo Is Created")
    }catch(err){
        res.send(`Something wrong following error \n ${err}`)
    }  
})

//get all todos 
app.get('/api/todos',(req,res)=>{
    try{
        todos.length!==0?
        res.send(todos):
        res.send("Todo List is empty")
    }catch(err){
        res.send(`Something wrong following error \n ${err}`)
    }
}) 

// get a single todo with id
// use /api/todo?id=1   change id value to get different todo
app.get('/api/todo',(req,res)=>{
    try{
        var flag = false
        var result
        todos.forEach(item=>{
            if(item.id==req.query.id){
                flag=true
                result = item
            }
        })
        flag?res.send(result):res.send(`No todo with id : ${req.query.id}`)
    }catch(err){
        res.send(`Something wrong following error \n ${err}`)
    }
})

// Updating the status of todo from pending to done
// /api/todo/done?id=1  change id value to change status of different todos
app.put('/api/todo/done',(req,res)=>{
    try{
        var flag = false
        todos.forEach(item => {
            if(item.id==req.query.id){
                item.status = "Done"
                flag=true
            }
        });
         flag?res.send("Status has changed"):res.send(`No Todo with id ${req.query.id}`)
    }catch(err){
        res.send(`Something wrong following error \n ${err}`)
    }
})

// delete a todo
//  /todo?id=1  change id value to delete that todo
app.delete('/todo',(req,res)=>{
    try{
        if(todos.length!==0){
            todos = todos.filter(item=>item.id!=req.query.id)
            res.send(todos)
        }else{
            res.send("!!Todo List is Empty Nothing to delete")
        }
    }catch(err){
        res.send(`Something wrong following error \n ${err}`)
    }
})

app.listen(PORT,()=>{
    console.log("server is up and running at PORT:",PORT)
})