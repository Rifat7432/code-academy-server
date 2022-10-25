const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const data = require('./data/courses.json')
const port = process.env.PORT || 5000
 app.get('/',(req,res)=>{
    res.send('hello world')
 })
 app.get('/courses',(req,res)=>{
    res.send(data)
 })
 app.get('/courses/:id',(req,res)=>{
   const id = req.params.id
   const newData = data.filter(courses=> courses.id === id) 
   res.send(newData)
})
 app.listen(port,()=>{
    console.log(`server runing on port : ${port}`)
})