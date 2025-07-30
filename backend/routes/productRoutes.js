
const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// ---------------------------- CREATE PRODUCT ----------------------------
router.post("/", protect, admin, async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      user: req.user._id,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).send("Server Error");
  }
});

// ---------------------------- UPDATE PRODUCT ----------------------------
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    Object.assign(product, req.body);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).send("Server Error");
  }
});

// ---------------------------- DELETE PRODUCT ----------------------------
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.deleteOne();
    res.json({ message: "Product Deleted Successfully" });
  } catch (error) {
    console.error("Delete Product Error:", error);
    res.status(500).send("Server Error");
  }
});

// ---------------------------- GET PRODUCTS WITH FILTERS ----------------------------
router.get("/", async (req, res) => {
  try {
    let {
      collection, size, color, gender, minPrice, maxPrice,
      sortBy, search, category, material, brand, limit
    } = req.query;

    const query = {};

  
    if (collection && collection !== "all") {
  query.collection = { $regex: new RegExp(collection, "i") };
}

if (category && category !== "all") {
  query.category = category;
}

if (material && material !== "") {
  query.material = { $in: material.split(",").filter(Boolean) };
}

if (brand && brand !== "") {
  query.brand = { $in: brand.split(",").filter(Boolean) };
}

if (size && size !== "") {
  query.size = { $in: size.split(",").filter(Boolean) };
}

if (color && color !== "") {
  query.color = { $in: color.split(",").filter(Boolean) };
}

if (gender && gender !== "") {
  query.gender = gender;
}

if (minPrice || maxPrice) {
  query.price = {};
  if (minPrice !== undefined) query.price.$gte = Number(minPrice);
  if (maxPrice !== undefined) query.price.$lte = Number(maxPrice);
}


    if (search && search.trim() !== "") {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc": sort.price = 1; break;
        case "priceDesc": sort.price = -1; break;
        case "popularity": sort.rating = -1; break;
        default: break;
      }
    }

    const products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0)
      .lean();

    res.json(products);
  } catch (error) {
    console.error("Get Products Error:", error);
    res.status(500).send("Server Error");
  }
});

// ---------------------------- BEST SELLER ----------------------------
router.get("/best-seller", async (req, res) => {
  try {
    const bestSeller = await Product.findOne().sort({ rating: -1 }).lean();
    if (!bestSeller) return res.status(404).json({ message: "No best seller found" });
    res.json(bestSeller);
  } catch (error) {
    console.error("Best Seller Error:", error);
    res.status(500).send("Server Error");
  }
});

// ---------------------------- NEW ARRIVALS ----------------------------
router.get("/new-arrivals", async (req, res) => {
  try {
    const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8).lean();
    res.json(newArrivals);
  } catch (error) {
    console.error("New Arrivals Error:", error);
    res.status(500).send("Server Error");
  }
});

// ---------------------------- GET PRODUCT BY ID ----------------------------
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    console.error("Get Product by ID Error:", error);
    res.status(500).send("Server Error");
  }
});

// ---------------------------- SIMILAR PRODUCTS ----------------------------
router.get("/similar/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).json({ message: "Product not found" });

    const similarProducts = await Product.find({
      _id: { $ne: new mongoose.Types.ObjectId(req.params.id) },
      gender: product.gender,
      category: product.category,
    })
      .limit(4)
      .lean();

    res.json(similarProducts);
  } catch (error) {
    console.error("Similar Products Error:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
