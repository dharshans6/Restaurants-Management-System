const mongoose =require('mongoose')

const ProductsSchema =new mongoose.Schema({
    name:{type:String,require},
    image:{type:String,require},
    price:{type:Number,require},
    description:{type:String,require},
},{
    timestamps:true
})

const ProductsModel =mongoose.model('products',ProductsSchema)
module.exports =ProductsModel