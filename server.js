
const express = require("express");
const app = express();

// Middleware
app.use((req , res , next)=>{
    console.log("Hello bro , I am middleware")
    next()
})

app.get("/" ,(req , res)=>{
    res.send(`Hello world \n
         How are al1tt , how can write multi line string`)
})

app.get("/about" ,(req , res)=>{
    res.send(`Hello About how are you? \n
         How are al1tt`)
})

app.use((err , req , res , next)=>{
    console.log(err)
    res.status(500).send("Internal server error")
})



app.listen(4000)