const mongoose=require('mongoose');

const directorySchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    profession:String,
    contact_no:String,
    email_id:String,
    address:String,
    image:String,
    Description:String
})

module.exports=mongoose.model("Directory",directorySchema)