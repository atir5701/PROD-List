const express = require("express")
const dotenv = require("dotenv");
const connectDb = require("./config/db")
const ProductRouter = require("./routes/products")
const path = require("path")

dotenv.config()


const app = express()

app.use(express.json())

const __dirname = path.resolve();

app.use("/product",ProductRouter)

// app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    return res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
})


app.get("/",(req,res)=>{
    res.send("Server is  Ready")
})


app.listen(8000,()=>{ 
    connectDb()
    console.log("Server started at 8000")
})
