const mongoose =require('mongoose')

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    password:String
})

const UserModel=mongoose.model('login',UserSchema)

module.exports =UserModel