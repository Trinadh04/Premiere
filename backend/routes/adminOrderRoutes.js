const express = require("express");
const Order = require("../models/Order");
const {protect,admin} = require("../middleware/authMiddleware");

const router = express.Router();

//@route GET/api/admin/orders/\
//@desc Get all order (Admin only)
// @access Prvate/admin

router.get("/",protect,admin,async (req,res) =>{
    try{
        const orders = await Order.find({}).populate("user","name email");
        res.json(orders);

    }catch(error){
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
});

//@route PUT/api/admin/orders/:id
//@desc Update to order status
//@access Private/Admin

router.put("/:id",protect, async (req,res) =>{
    const order = await Order.findById(req.params.id).populate("user","name");
   try{
     if(order) {
        order.status  = req.body.status || order.status;
        order.isDelivered =
         req.body.status === "Delivered" ? true : order.isDelivered;
        order.deliveredAt = req.body.status === "Dleivered" ? Date.now() :order.delivered
        
        const updatedOrder = await order.save();
        res.json(updatedOrder)


    } else {
        res.status(404).json({message:"Order not found"});
    }

   } catch(error){
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
});


//@ Delete /api/admin/orders
// @desc Delete an order
// @access Private/Admin

router.delete("/:id",protect ,admin,async (req,res) =>{
    try{

    } catch(error){
        
    }
})

module.exports = router;