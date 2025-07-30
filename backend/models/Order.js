const mongoose = require("mongoose"); // ❌ Fix typo: required → require

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: String,
    color: String,
    quantity: {
        type: Number,
        required: true,
    },
}, { _id: false });

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // ❌ Fix semicolon → colon
        required: true,
    },

    orderItems: [orderItemSchema], // ❌ Fix {} → [] for array of subdocuments

    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },

    paymentMethod: {
        type: String,
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true,
    },

    isPaid: {
        type: Boolean,
        default: false,
    },

    paidAt: {
        type: Date,
    },

    isDelivered: {
        type: Boolean,
        default: false,
    },

    deliveredAt: {
        type: Date,
    },

    paymentStatus: {
        type: String,
        default: "pending",
    },

    status: {
        type: String,
        enum: ["processing", "Shipped", "Delivered", "Cancelled"], // ❌ "Deliverd" fixed to "Delivered"
        default: "processing", // ❌ Capitalized "Processing" changed to lowercase to match enum
    },
}, {
    timestamps: true // ❌ Fix: use "timestamps", not "timeseries"
});

module.exports = mongoose.model("Order", orderSchema);
