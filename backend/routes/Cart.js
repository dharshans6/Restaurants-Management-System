const express = require("express");
const router = express.Router();
const ProductModel = require("../Schema/ProductSchema");
const CartModel = require("../Schema/CartSchema");

// Add product to cart
router.post("/addToCart", async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        const existingCartItem = await CartModel.findOne({ name: product.name });
        if (existingCartItem) {
            existingCartItem.quantity += quantity || 1;
            await existingCartItem.save();
            return res.status(200).json(existingCartItem);
        }

        const newCartItem = new CartModel({
            name: product.name,
            image: product.image,
            price: product.price,
            description: product.description,
            quantity: quantity || 1,
        });

        await newCartItem.save();
        res.status(200).json(newCartItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add product to cart" });
    }
});

// Get all items in the cart
router.get("/getCart", async (req, res) => {
    try {
        const cartItems = await CartModel.find({});
        res.status(200).json(cartItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch cart items" });
    }
});

module.exports =router
