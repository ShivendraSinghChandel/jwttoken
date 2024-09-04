const userModel=require("../models/userModel");
const bcrypt=require("bcrypt");

const userSave=async(req,res)=>{
    const {name,email,password}=req.body;

    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);

    const User=await userModel.create({
        name:name,
        email:email,
        password:hashPassword
    })
    res.status(200).send(User);
}

const userLogin=async(req,res)=>{
    const {email,password}=req.body;

    if(!login)
    {
        res.status(400).json({
            message:"Email not found",
            status:"404 Not Found"
        });
        return;
    }

    const validPassword=await bcrypt.compare();

    
}


module.exports={
    userSave,
    userLogin
}