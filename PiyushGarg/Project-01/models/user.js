const mongoose =require("mongoose");

// Schema
const userSchema =new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    job_title:{
        type:String,
    },
    gender:{
        type:String,
    },

},{timestamps:true});

//Model
const User = mongoose.model("user",userSchema);

module.exports=User;