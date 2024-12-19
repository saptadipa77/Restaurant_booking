import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"fullstack",
    })
    .then(()=>{
        console.log("Connected to database successfully")
    })
    .catch((error)=>{
        console.log(`Some error occurred while connecting to database! ${error}`)
    })
}

