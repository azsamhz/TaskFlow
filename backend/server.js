require("dotenv").config();
const express=require("express"),cors=require("cors"),path=require("path"),connectDB=require("./config/db");
const {notFound,errorHandler}=require("./middleware/errors");
if(!process.env.JWT_SECRET||!process.env.MONGODB_URI){console.error("Configura .env");process.exit(1)}
const app=express();app.use(cors());app.use(express.json());
app.use(express.static(path.join(__dirname,"../frontend")));
app.get("/api/health",(req,res)=>res.json({status:"ok"}));
app.use("/api/auth",require("./routes/auth"));app.use("/api/tasks",require("./routes/tasks"));
app.use(notFound);app.use(errorHandler);
connectDB().then(()=>app.listen(process.env.PORT||3000,()=>console.log("http://localhost:"+(process.env.PORT||3000))))
.catch(e=>{console.error(e);process.exit(1)});
