const express = require("express");
const Product = require("../models/Product");
const {protect,admin} = require("../middleware/authMiddleware");


const  router = express.Router();
//@route GET /api/admin/products
// @desc get all products(admin-only)
//@access private

router.get("/", protect,admin,async(req,res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error){
        console.error(error)
        res.status(500).json({message:"Server Error"})

    }

})
// PUT /api/admin/products/:id
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Log incoming data for debugging
    console.log("Incoming update:", req.body);

    // Assign incoming values or keep old ones
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.countInStock = req.body.countInStock || product.countInStock;
    product.sku = req.body.sku || product.sku;
    product.category = req.body.category || product.category;
    product.brand = req.body.brand || product.brand;
    product.sizes = req.body.sizes || product.sizes;
    product.colors = req.body.colors || product.colors;
    product.collections = req.body.collections || product.collections;
    product.material = req.body.material || product.material;
    product.gender = req.body.gender || product.gender;
    product.images = req.body.images || product.images;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error("Update Product Error:", error.message);
    res.status(500).json({ message: "Server error while updating product" });
  }
});


module.exports = router;