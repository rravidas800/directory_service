const express=require('express')
const routes=express.Router();
const Directory=require("../model/directory");
const multer=require('multer');

const {fileuploads}=require('../middleware/fileupload');

const image=fileuploads.single('image');
const { unlink } =require('node:fs');
const { default: mongoose } = require('mongoose');

/*-------Save - edit - view directory----------*/

routes.post('/directory/:type',(req,res,next)=>{
    
   if(req.params.type=='save')
   {
      image(req,res,function(err){
                      
          if(err instanceof multer.MulterError) {
              // A multer error occurred (e.g., file size exceeded or invalid file type)
              return res.status(200).json({status:"failed",error: err.message, message: err.message});
          } else if (err) {
              // Some other error occurred
              return res.status(200).json({status:"failed",error: err.message, message: err.message});
          }

          let imageName="";
          if(req.file)
          {
            imageName=req.file.filename
          }

          const directory=new Directory({
            _id:new mongoose.Types.ObjectId,
            name:req.body.name,
            profession:req.body.profession,
            contact_no:req.body.contact_no,
            email_id:req.body.email_id,
            address:req.body.address,
            image:imageName,
            description:req.body.description        
          });

          directory.save()
          .then(result=>{
              return res.status(200).json({
                  status:"success",
                  message:"Record saved successfully"
              })
          })
          .catch(err=>{
              unlink('./public/uploads/'+imageName,(err)=>{})
              return res.status(210).json({
                status:"failed",
                message:"Failed to save record! try again later."
              })
          })

      })
   }
   else if(req.params.type=='view')
   {
        Directory.find()
        .then(result=>{
            return res.status(200).json({
              status:"success",
              result:result
            })
        })
        .catch(err=>{
            return res.status(210).json({
              status:"failed",
              "message":"Something went wrong! try again later"
            })
        })
   }

    
})

/*-------------end----------*/


module.exports=routes