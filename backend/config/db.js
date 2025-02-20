const mongoose = require("mongoose")
const dotenv = require("dotenv")

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("MongoDb server connected"))
    }catch(error){
        console.log(error)
    }
}


module.exports = connectDb