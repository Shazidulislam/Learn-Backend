const express = require("express");
const app = express();
const PORT  = process.env.PORT || 4000;

app.use(express.json())

app.get("/" , (req , res)=>{
    res.send("Hello World");
})



app.get("/twiter" , (req , res)=>{
    res.send("<h1>Hello frmo another world </h1>")
})

app.listen(PORT , ()=>{
    console.log(`Example app listening on port ${PORT}`)
})
