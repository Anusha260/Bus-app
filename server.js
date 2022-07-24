const express=require("express")
const connectDB=require("./config/db")

const app=express()

// connect mongodb
connectDB()
app.use(express.json({extended:false}))

app.get("/",(req,res)=>res.send("api running"))
app.use("/api/auth",require("./routers/api/auth"))