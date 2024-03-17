const express = require("express");
const fs = require("fs");
const mongoose =require("mongoose");
const { timeStamp } = require("console");
const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/learing-express")
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log("Mongo error",err));


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

//MIDDLEWARE
// -> anything defined inside middlewares stays through out the program
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    console.log("hello from middleWare1");
    next();
});
//all the get request are getting stored
app.use((req,res,next)=>{
    fs.appendFile("log.txt",`\n${Date.now()}:${req.ip} ${req.method}: ${req.path}`,(err,data)=>{
        next();
    })
});
app.use((req,res,next)=>{
    console.log("hello from middleWare2");
    next();
});


app.get("/users",async(req,res)=>{
    const allDbUsers = await User.find({})
    const html =`<ul>
    ${allDbUsers.map((user)=>`<li>${user.first_name} ${user.email}</li>`).join('')}
    </ul>`;
    res.send(html);
});

//REST API
app.get('/api/users',async(req,res)=>{
    const allDbUsers = await User.find({})
    return res.json(allDbUsers);
});

//POST
app.post("/api/users",async (req,res)=>{
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
    
    return res.status(201).json({msg:"success"})
    
});

app.route('/api/users/:id')
.get(async(req,res)=>{
    const user =await User.findById(req.params.id);

    if(!user) return res.status(404).json({ error: "user not found"});

    return res.json(user);
})
.patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id, req.body);
    
    return res.json({status:"Success"});
})
.delete(async(req,res)=>{
    //delete the user
    await User.findByIdAndDelete(req.params.id);
    return res.json({status :"Success"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});