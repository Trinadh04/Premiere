const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const Users = require("./models/Users");
const products = require("./Data/products");
const Cart = require ("./models/Cart");

dotenv.config();

// Connect to Mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    });

// FUNCTION TO SEED DATA
const seedData = async () => {
    try {
        // Clear existing data
        await Product.deleteMany();
        await Users.deleteMany();
        await Cart.deleteMany();

        // Create a default admin 
        const createUser = await Users.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456",
            role: "admin"
        });

        // Assign the default user ID to each product
        const userID = createUser._id;
        const sampleProducts = products.map((product) => ({
            ...product,
            user: userID
        }));

        // Insert the products into the database
        await Product.insertMany(sampleProducts);
        console.log("Product data seeded successfully");
        process.exit();

    } catch (error) {
        console.error("Error seeding the data:", error);
        process.exit(1);
    }
};

seedData();
