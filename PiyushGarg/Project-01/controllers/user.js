const User = require("../models/user")

async function handleCreateNewUser(req,res){
    //add new user
    const body = req.body;
    if( !body || 
        !body.first_name ||
        !body.last_name |
        !body.gender ||
        !body.email ||
        !body.job_title ){
        
        return res.status(400).json({ msg : "All fields are required "});
    }
    const result = await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,
    });
    
    return res.status(201).json({msg:"success",id: result._id});
    
}

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlegetUserById(req,res){
    const user= await User. findById( req.params. id);
    if (!user) return res.status(404).json({ error: "user not found"})
    return res.json(user);
}

async function handleupdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,req.body);
    return res.json({status : "success"});
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "success"});
}

module.exports={
    handleCreateNewUser,
    handleGetAllUsers,
    handlegetUserById,
    handleupdateUserById,
    handleDeleteUserById,
}