const r=require("express").Router(),bcrypt=require("bcryptjs"),jwt=require("jsonwebtoken"),User=require("../models/User"),auth=require("../middleware/auth");
r.post("/register",async(req,res,next)=>{try{
 const {name,email,password}=req.body;
 if(!name||!email||!password||password.length<8)return res.status(400).json({message:"Completa los datos; contraseña mínima de 8 caracteres."});
 const user=await User.create({name,email,password:await bcrypt.hash(password,12)});
 res.status(201).json({message:"Cuenta creada.",user:{id:user.id,name:user.name,email:user.email}});
}catch(e){next(e)}});
r.post("/login",async(req,res,next)=>{try{
 const {email,password}=req.body,user=await User.findOne({email}).select("+password");
 if(!user||!await bcrypt.compare(password||"",user.password))return res.status(401).json({message:"Credenciales incorrectas."});
 const token=jwt.sign({},process.env.JWT_SECRET,{subject:user.id,expiresIn:process.env.JWT_EXPIRES_IN||"2h"});
 res.json({token,user:{id:user.id,name:user.name,email:user.email}});
}catch(e){next(e)}});
r.get("/me",auth,async(req,res,next)=>{try{const user=await User.findById(req.user.id).select("name email");res.json({user})}catch(e){next(e)}});
module.exports=r;
