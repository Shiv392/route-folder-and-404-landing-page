const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const admitroute=require('./Routes/admin.js')
const shoproute=require('./Routes/shop.js')
const port=4000;

app.use(bodyParser.urlencoded({extended:false}))

app.use(admitroute);
app.use(shoproute);

//for 404 landing
app.use((req,res,next)=>{
    res.status(404).send(`<h1>404: page not found</h1>`)
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})