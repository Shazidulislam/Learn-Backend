// form handling with the forms
// handle backend process of forms and making sure the data coming form frontend lib, fw templating engine , we still handle it in backend using expressjs and node.js

// 


const express = require("express");
const app = express();
 
// Middleware
app.use(express.json()); // JSON data handle kore
app.use(express.urlencoded({extended:true})) // form data handle kore

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