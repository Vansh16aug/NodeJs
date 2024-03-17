const express = require("express");
const fs = require("fs");
const users =require("./MOCK_DATA.json");
const { data } = require("jquery");
const app = express();
const PORT = 3000;

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

app.get("/users",(req,res)=>{
    const html =`<ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join('')}
    </ul>`;
    res.send(html);
});

//REST API
app.get('/api/users',(req,res)=>{
    res.setHeader('X-MyName','Vansh Kumar');  //Custom Header should start with X
    console.log(req.headers);
    return res.json(users);
});

//POST
app.post("/api/users",(req,res)=>{
    //add new user
    const body = req.body;
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data) => {
        if(err){
            return err;
        }
        return res.json({status:"success",id:users.length});
    });
})

app.route('/api/users/:id')
.get((req,res)=>{
    const id =Number(req.params.id);
    const user = users.find(user=>user.id == id);
    return res.json(user);
})
.patch((req,res)=>{
    //edit the user
    const id = Number(req.params.id);
    // user contains the existing data of user
    const user = users.find(user=>user.id == id);
    
    // Update the user details

    // body contains whats new from request
    const body = req.body;
    user.first_name = body.first_name || user.first_name;
    user.last_name = body.last_name || user.last_name;
    user.email = body.email || user.email;
    user.gender = body.gender || user.gender;
    
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data) => {
        if(err){
            return err;
        }
        return res.json({status:"success"});
    });
})
.delete((req,res)=>{
    //delete the user
    const id = Number(req.params.id);
    const user = users.find(user=>user.id==id);

    const body=req.body;
    users.splice(users.indexOf(user), 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) {
            return err;
        }
        return res.json({ status: "success" });
    });
});



// we can see these 3 are using same route so best practise is to use router

// app.get('/api/users/:id',(req,res)=>{
//     const id =Number(req.params.id);
//     const user = users.find(user=>user.id == id);
//     return res.json(user);
// });

// app.patch("/api/users/:id",(req,res)=>{
//     //edit the user
//     return res.json({status:"pending"});
// })

// app.delete("/api/users/:id",(req,res)=>{
//     //delete the user
//     return res.json({status:"pending"});
// })




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});