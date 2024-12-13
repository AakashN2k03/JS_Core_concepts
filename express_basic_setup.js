//Express is a minimal and flexible Node.js web application framework that provides tools to build robust APIs.

const express =require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello world")
});

app.get('/user',(req,res)=>{
    res.json({users:["steve","robert","hemsworth"]});
});

app.post('/postUser',(req,res)=>{
    res.status(201).send("user has been created using post method")
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log("server has not been initiated")
    }
    else{
        console.log("server is ready")
    }
});

