require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.get('/', (req,res)=>
{
    res.send("HIIIIIII");
});
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const connectDB = async(req,res)=>{
    try{
        await mongoose.connect(MONGO_URI);
            console.log('MongoDB Connected successfully!');
    }
    catch(errors)
    {
        console.log(errors);
         process.exit(1);
    }
}
connectDB();
app.listen(PORT,()=>
console.log(`Server running on http://localhost:${PORT}`));