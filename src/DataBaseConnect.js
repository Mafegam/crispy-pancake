import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("Failed connecting to database");
});