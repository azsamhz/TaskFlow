const jwt=require("jsonwebtoken");
module.exports=(req,res,next)=>{
 const [type,token]=(req.headers.authorization||"").split(" ");
 if(type!=="Bearer"||!token)return res.status(401).json({message:"Inicia sesión."});
 try{req.user={id:jwt.verify(token,process.env.JWT_SECRET).sub};next();}
 catch{return res.status(401).json({message:"Token inválido o vencido."});}
};
