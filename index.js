const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var jsonParser = bodyParser.json()
const PORT = 3000
var todos =[]

// Create a new todo
app.post('/createTodo',jsonParser,(req,res)=>{
    try{
        req.body.forEach(item=>{
            todos.push(item)
        })
        res.send("Todo Is Created")
    }catch(err){
        res.send(`Something wrong following error \n ${err}`)
    }
    
})

//get all todos 
app.get('/todos',(req,res)=>{
    try{
        todos.length!==0?
        res.send(todos):
        res.send("Todo List is empty")
    }catch(err){
        res.send(`Something wrong following error \n ${err}`)
    }
}) 

// get a single todo with id
app.get('/todo',(req,res)=>{
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
app.put('/api/todo/id/done',(req,res)=>{
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
app.delete('/todo:id',(req,res)=>{
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