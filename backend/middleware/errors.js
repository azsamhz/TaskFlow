exports.notFound=(req,res)=>res.status(404).json({message:"Ruta no encontrada."});
exports.errorHandler=(err,req,res,next)=>{
 console.error(err);
 if(err.code===11000)return res.status(409).json({message:"El correo ya existe."});
 if(err.name==="ValidationError"||err.name==="CastError")return res.status(400).json({message:"Datos inválidos."});
 res.status(500).json({message:"Error interno."});
};
