//user.js manages connections to the user data

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('brcypt-nodejs');

//user schema
var UserSchema=new Schema({
	name: {type:String, required:true};
	username: {type:String, required:true, index:{unique:true}};
	passowrd: {type:String, required:true, select:false};
});

//hash the password before it is saved
UserSchema.pre('save',function(next){
	var user=this;

	if(!user.isModified('password')) return next();

	//generate hash
	bcrypt.hash(user.password,null,null,function(err,hash){
		if(err) return next(err);

		//change the password to hashed version
		user.password=hash;
		next();
	});
});

//method used to compare password

UserSchema.methods.comparePassword=function(password){
	var user=this;
	return bcrypt.compareSync(password,user.password);
};

//return the module

module.exports=mongoose.model('User',UserSchema);