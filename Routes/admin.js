const express=require('express');

const Route=express.Router();

Route.get('/add-product',(req,res,next)=>{
    res.send(`<form action="/product" method="post">
    <input type="text" id="title" name="title"><button type="submit">Add To Cart</button>
    </form>`)
    })
    
Route.post('/product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
    })

    module.exports=Route