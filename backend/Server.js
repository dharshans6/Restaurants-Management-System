const express = require('express');
const mongoose = require('mongoose');
const ProductModel = require('./Schema/ProductSchema'); // Ensure this path is correct
const UserModel = require('./Schema/Login.Schema'); // Ensure this path is correct
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const mongoDBurl = 'mongodb+srv://thedharshans6:test123@jwt.dtah4.mongodb.net/ROMS?retryWrites=true&w=majority&appName=JWT';

// Add Product to Products Collection
app.post('/productPost', async (req, res) => {
  try {
    const { name, image, price, description } = req.body;
    const newProduct = new ProductsModel({ name, image, price, description });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/getProducts", async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json(products);
    } catch (err) {
        // console.error(err);
        res.json(err);
    }
});

// Add User to Login Collection
app.post('/create', async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, age, password: hash });
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Authenticate User

app.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await UserModel.findOne({email})
        const isValid=await bcrypt.compare(password,user.password)
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

// Get All Users
app.get('/getUser', async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Connect to MongoDB
mongoose.connect(mongoDBurl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to DB'))
  .catch(err => console.error(err));

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
