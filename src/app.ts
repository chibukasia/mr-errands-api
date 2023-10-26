import express from "express";

const app  = express()
const port = 5000

app.get('/', (req, res)=>{
    res.json({title: 'Hello World'})
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})