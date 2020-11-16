const express = require('express');

const app = express()
const PORT = 5000;

app.get('/',(req,res)=>{
    res.json({"msg":"Welcome to ChatBot"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT} ...`)
})