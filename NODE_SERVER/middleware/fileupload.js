const multer=require('multer');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'_'+file.originalname);
    }
})

const fileuploads=multer({
    storage:storage,
    limits:{
        fileSize:524288
    },
    fileFilter:function(req,file,cb){
        if(file.mimetype.startsWith('image/')){
            cb(null,true);
        }else{
            cb(new Error('Only image files are allowed'),true)
        }
    }
})


module.exports={
    fileuploads
}