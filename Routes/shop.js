const express=require('express');

const route=express.Router();

route.get('/',(req,res,next)=>{
    res.send(`  <h1>this is home page</h1>`)
    })


module.exports=route