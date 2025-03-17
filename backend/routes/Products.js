const express = require("express");
const router = express.Router();
const ProductModel = require("../Schema/ProductSchema");
const cors =require('cors')
router.use(cors())
router.get("/getProducts", async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json(products);
    } catch (err) {
        // console.error(err);
        res.json(err);
    }
});

module.exports=router
