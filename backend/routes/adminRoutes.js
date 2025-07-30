const express= require("express")
const User = require("../models/Users");
const { protect , admin} = require ("../middleware/authMiddleware");


const router = express.Router();

//@route GET/api/admin/users
//@desc get all user (Admin - only)
//@access Private/Admin


router.get("/",protect,admin,async(req,res) =>{
    try{
        const users = await User.find({});
        res.json(users);

    } catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});

    }
});

//@route POST /api/admin/users
//@desc Add a new user(admin only)
// @Access private admin


router.post("/",protect,admin ,async (req,res) =>{
    const {name,email,password,role} = req.body;
    try{
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message:"User already exists"})
        }
        user = new User ({
            name,
            email,
            password,
            role:role || "customer",

        });
        await user.save();
        res.status(201).json({message:"User Created Successfully",user})

    }catch(error) {
        console.error(error)
        res.status(500).json({message:"Server  Error"})

    }
})

// @route PUT/api/admin/users/:id
// @desc update user info (admin only) -Name,email and role
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;

      const updatedUser = await user.save();
      res.json({ message: "User updated successfully", user: updatedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
// @roue DELETE /api/admin/users/:id
//@desc Delete a user
// @access private/admin

router.delete("/:id",protect,admin,async(req,res) =>{
  try {
    const user = await User.findById(req.params.id)
    if (user) {
      await user.deleteOne();
      res.status(200).json({message:"User deleted successfully"})
    } else{
      res.status(404).json({message:"User not found"})
    }

  // }catch(error){
  //   console.error(error)
  //   res.status(500).json({message:"Server Error"})
  // }
   } catch (error) {
  console.error("Error deleting user:", error.message);
  res.status(500).json({ message: "Server Error", error: error.message });
}

})

module.exports = router;