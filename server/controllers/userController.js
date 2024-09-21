const userModel=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

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
    const login=await userModel.findOne({email:email});
    if(!login)
    {
        res.status(400).json({
            message:"Email not found",
            status:"400 Bad request"
        });
        return;
    }

    const validPassword= await bcrypt.compare(password,login.password);
    if(!validPassword)
    {
        res.status(400).json({
            message:"Incorrect password",
            status:"400 Bad request"
        });
        return;
    }

    const token=jwt.sign({userid:login._id,name:login.name},"thisissecretkey",{expiresIn:'10m'});
    res.status(200).send(token);
  
}


module.exports={
    userSave,
    userLogin
}