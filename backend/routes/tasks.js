const r=require("express").Router(),Task=require("../models/Task"),auth=require("../middleware/auth");
r.use(auth);
r.get("/",async(req,res,next)=>{try{res.json({tasks:await Task.find({owner:req.user.id}).sort({createdAt:-1})})}catch(e){next(e)}});
r.post("/",async(req,res,next)=>{try{if(!req.body.title?.trim())return res.status(400).json({message:"El título es obligatorio."});const task=await Task.create({title:req.body.title,description:req.body.description||"",owner:req.user.id});res.status(201).json({task})}catch(e){next(e)}});
r.put("/:id",async(req,res,next)=>{try{const task=await Task.findOneAndUpdate({_id:req.params.id,owner:req.user.id},req.body,{new:true,runValidators:true});if(!task)return res.status(404).json({message:"Tarea no encontrada."});res.json({task})}catch(e){next(e)}});
r.delete("/:id",async(req,res,next)=>{try{const task=await Task.findOneAndDelete({_id:req.params.id,owner:req.user.id});if(!task)return res.status(404).json({message:"Tarea no encontrada."});res.json({message:"Tarea eliminada."})}catch(e){next(e)}});
module.exports=r;
