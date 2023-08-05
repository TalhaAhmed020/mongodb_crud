import mongoose from "mongoose";

const connectMongoDB = async() => {
    const uri = process.env["MONGODB_URI"]; 
    try{
        await mongoose.connect(uri);
        console.log("Connected");
    }
    catch(error){
        console.log("Error connecting to MongoDB");
    }
}

export default connectMongoDB