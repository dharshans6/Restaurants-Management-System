const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./Schema/Login.Schema');
const bcrypt =require('bcrypt')




const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://thedharshans6:test123@jwt.dtah4.mongodb.net/ROMS?retryWrites=true&w=majority&appName=JWT')
  .then(() => console.log('mongoDB connected'))
  .catch((err) => console.log(err));





app.post('/create', async (req, res) => {
  try {
    const { name, email,age, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email,age, password: hash });
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await UserModel.findOne({email})
        const isValid=await bcrypt.compare(password,user.password)
        if(email === 'admin' && password === '12345'){
            res.json('admin')
        }
        if(!user){
          res.json('no record')
        }
        if(user){
            if(isValid){
                res.json('success')
            }else{
                res.json('wrong password')
            }
        }
    }catch(err){
        res.json(err)
    }
})

app.get('/getUser',async(req,res)=>{
    try{
        const User= await UserModel.find({})
        res.json(User)
    }catch(err){
        res.json(err)
    }
})

app.listen(3000, () => {
  console.log('server is running');
});
