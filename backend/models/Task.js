const mongoose = require("mongoose");
module.exports = mongoose.model("Task", new mongoose.Schema({
  title:{type:String,required:true,trim:true,maxlength:120},
  description:{type:String,default:"",maxlength:500},
  completed:{type:Boolean,default:false},
  owner:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
},{timestamps:true}));
