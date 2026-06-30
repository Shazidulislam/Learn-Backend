// http and https

const http = require('node:http')

const server = http.createServer((req,res)=>{
    res.end("Hello world")
})
console.log("hello bro")
server.listen(3000)

// NPM understaning
// npm - node pacakaje manejer

//Understanding node_modules
// dependencies are the packages that your project needs to work properly.
// devDependencies -- are the packages that are only needed for development and testing purposes, but not for the production version of your project.

// Scripts - Understanding default script PATH and custom script

// modules vs pacakajes
// node js core e ja installed thake ta modules
// npm e ja install kora hoy ta packages


// Expressjs  Framework
// Introduction to expressjs
// Setting up a a basic expressjs application
// Routing in expressjs
// Middleware in expressjs
// Response and Request in expressjs
// Error handling in expressjs

// What is main role of expressjs in backend development

// expressjs is webfreamework in node.js  that simplifies backend devlopment .it help us to hnadle routing , request and response, middleware , and building restfull APIs. and MREN stack development

// expressjs is manage everything from receiving the request and giving the response