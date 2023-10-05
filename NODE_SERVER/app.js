const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const routes=require("./routes/routes")

mongoose.connect("mongodb://localhost:27017/directory");
mongoose.connection.on("connected",()=>{
    console.log("Connected to database");
})
mongoose.connection.on("error",()=>{
    console.log("Failed to connect to database");
})


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',routes);

app.use("*",(req,res,next)=>{
    return res.status(404).json({
        error:"Bad request"
    })
})

module.exports=app;