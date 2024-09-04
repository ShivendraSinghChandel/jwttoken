const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const userRoute=require("./routes/userRoute");
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/jwttoken").then((res)=>{
    console.log("Database Connected");
})

app.use(cors());
app.use("/user",userRoute);

app.listen(8000,()=>{
    console.log("server started on port 8000");
})