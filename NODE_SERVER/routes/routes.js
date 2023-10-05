const express=require('express')
const routes=express.Router();

routes.post('/save-directory',(req,res,next)=>{
    console.log("aaaaaa")
    return res.status(200).json({
        "status":"success",
        message:"test"
    })
})



module.exports=routes