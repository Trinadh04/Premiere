const jwt = require("jsonwebtoken");
const User = require("../models/Users");


const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1].trim();
            console.log("Token:", token);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            

            req.user = await User.findById(decoded.user.id).select("-password");

           
            next();
        } catch (error) {
            console.error("Token verification failed:", error);
            res.status(401).json({message:"Not authorized,token failed"})
        }
    } else {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};

// Middle ware check if the user is an admin
const admin = (req,res,next) => {
    if(req.user && req.user.role === "admin"){
        next();
    } else {
        res.status(403).json({meassage:"Not authorised as an admin"})
    }
}
module.exports = { protect, admin};
