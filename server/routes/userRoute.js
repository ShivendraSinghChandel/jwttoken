const express=require("express");
const route=express.Router();
const userController=require("../controllers/userController");

route.post("/usersave",userController.userSave);

route.post("userlogin",userController.userLogin);


module.exports=route;