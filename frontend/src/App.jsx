
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserLayout from "./Components/Layout/UserLayout";
// import Home from "./Pages/Home";
// import { Toaster } from "sonner";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Profile from "./Pages/Profile";
// import CollectionPage from "./Pages/CollectionPage";
// import ProductDetails from "./Components/Products/ProductDetails";
// import Checkout from "./Components/Cart/Checkout";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import OrderConfirmationPage from "././Pages/OrderConfirmationPage"
// import OrderDetailsPage from "./Pages/OrderDetailsPage";
// import MyOrdersPage from "./Pages/MyOrdersPage";
// import AdminLayout from "./Components/Admin/AdminLayout";
// import AdminHomePage from "./Pages/AdminHomePage";
// import UserManagement from "./Components/Admin/UserManagement";

// const CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID ;

// const App = () => {
//   return (
//     <PayPalScriptProvider options={{ "client-id": CLIENT_ID, currency: "USD" }}>
//       <BrowserRouter>
//         <Toaster position="top-right" />
//         <Routes>
//           <Route path="/" element={<UserLayout />}>
//             <Route index element={<Home />} />
//             <Route path="login" element={<Login />} />
//             <Route path="register" element={<Register />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="collections/:collection" element={<CollectionPage />} />
//             <Route path="product/:id" element={<ProductDetails />} />
//             <Route path="checkout" element={<Checkout />} />
//             <Route path="order-confirmation" element={<OrderConfirmationPage />} />
//             <Route path="order/:id" element={<OrderDetailsPage />} />
//             <Route path="my-orders" element={<MyOrdersPage/>}/>

            
//           </Route>
//           <Route path = "/admin" element={<AdminLayout/>}/> 
//           <Route index element = {<AdminHomePage/>}/>
//           <Route path ="users" element = {<UserManagement/>}/>
//           <Route/>
//         </Routes>
//       </BrowserRouter>
//     </PayPalScriptProvider>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";
import { Toaster } from "sonner";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CollectionPage from "./Pages/CollectionPage";
import ProductDetails from "./Components/Products/ProductDetails";
import Checkout from "./Components/Cart/Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import OrderConfirmationPage from "./Pages/OrderConfirmationPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import MyOrdersPage from "./Pages/MyOrdersPage";
import AdminLayout from "./Components/Admin/AdminLayout";
import AdminHomePage from "./Pages/AdminHomePage";
import UserManagement from "./Components/Admin/UserManagement";
import ProductManagement from "./Components/Admin/ProductManagement";
import EditProductPage from "./Components/Admin/EditProductPage";
import OrderManagement from "./Components/Admin/OrderManagement";

import {Provider} from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./Components/Common/ProtectedRoute";

const CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;

const App = () => {
  return (
    <Provider  store= {store}>
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID, currency: "USD" }}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>

          {/* ✅ User routes nested inside UserLayout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collections/:collection" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation" element={<OrderConfirmationPage />} />
            {/* <Route path="order-details/:id" element={<OrderDetailsPage />} /> */}
            <Route path="/order-details/:id" element={<OrderDetailsPage />} />

            <Route path="my-orders" element={<MyOrdersPage />} />
          </Route>

          {/* ✅ Admin routes properly nested inside AdminLayout */}
          <Route path="/admin" element={<ProtectedRoute role = "admin"><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminHomePage />} />              {/* /admin */}
            <Route path="users" element={<UserManagement />} />      {/* /admin/users */}
            <Route path="products" element={<ProductManagement/>}/>
            <Route path="products/:id/edit" element={<EditProductPage/>}/>
            <Route path="orders" element={<OrderManagement/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
    </Provider>

  );
};

export default App;
