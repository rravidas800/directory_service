const express=require('express')
const routes=express.Router();
const Directory=require("../model/directory");

/*-------Save - edit - view directory----------*/

routes.post('/directory/:type',(req,res,next)=>{
    
   if(req.params.type=='save')
   {
      const directory=new Directory({
        name:req.body.name,
        profession:req.body.profession,
        contact_no:req.body.contact_no,
        email_id:req.body.email_id,
        address:req.body.address,
        image:'',
        description:req.body.description        
      })
      directory.save()

        return res.status(200).json({
            "status":"success",
            message:"test"
        })
   }

    
})

/*-------------end----------*/


module.exports=routes