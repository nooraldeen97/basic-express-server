'use strict';
const express= require("express");

const app = express();

const serverError=require("./error-handlers/500");
const notFound=require("./error-handlers/404");
const methodAndPath =require("./middleware/logger");
const checkName =require("./middleware/validator");

app.use(methodAndPath);

app.get("/",(req,res)=>{
    res.send("welcome to the home route")
})

app.get("/person",checkName,personHandler)


function personHandler(req,res){
res.json({
    name:req.query.name
})
}




function start(PORT){
    app.listen(PORT,()=>{
        console.log(`listening to the ${PORT}`)
    })
}

app.use(serverError);
app.use("*",notFound);

module.exports={
    start:start,
    app:app
}
