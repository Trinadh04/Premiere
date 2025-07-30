
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice"; // adjust the path if in a different folder
import productReducer from "./slice/productslice";
import cartReducer from "./slice/cartSlice";
import checkoutReducer from "./slice/checkoutSlice";
import orderReducer from "./slice/orderSlice";
import adminReducer from "./slice/adminSlice";
import adminProductReducer from "./slice/adminProductSlice";
import adminOrderReducer from "./slice/adminOrderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products:productReducer,
    cart : cartReducer,
    checkout:checkoutReducer,
    orders:orderReducer,
    admin:adminReducer,
    adminProducts:adminProductReducer,
    adminOrders:adminOrderReducer,
  },
});

export default store;
