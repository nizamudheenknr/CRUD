const express = require ("express")
const app = express()
const bodyParser = require("body-parser")

app.use (bodyParser.json())

let users = []

app.post("/users",(req,res)=>{
  const { name,email,username}=req.body
  const newUser={id:users.length + 1,name,email,username }
  users.push(newUser)
  res.json(newUser)
})

app.get('/users',(req,res)=>{
  res.json(users)
})

app.get('/users/:id',(req,res)=>{
  const id = parseInt(req.params.id)
  const {name,email,username}=req.body
  const userIndex = users.findIndex(user => user.id === id)
  if (userIndex !== -1){
    users[userIndex]={...users[userIndex],name,email,username}
    res.json(users[userIndex])
  }else{
    res.status(404).json({message:'User not found'})
  }
})

const PORT = 3010;
app.listen(PORT,()=>{
  console.log(`server is running ${PORT}`);
})