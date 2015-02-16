//base set-up and basic packages needed
var express=require("express");
var app=express();
var bodyParser=require("body-parser");


//json token packages

var jwt=require("jsonwebtoken");
var superSecret="thisshouldbeasecret";

var userRouter=express.Router();

userRouter.use(function(req,res,next){
    consol.log(req.method);
    next();
});

adminRouter.get('/',function(req,res){
    //authenticate user and send back list of possible tags
});

app.listen(1337);
console.log('connection made!');
