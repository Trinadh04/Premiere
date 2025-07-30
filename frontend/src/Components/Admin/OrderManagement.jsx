// // // // import { useEffect } from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {fetchAllOrders, updateOrderStatus} from "../../redux/slice/adminOrderSlice";

// // // // const OrderManagement = () => {
// // // //  const dispatch = useDispatch();
// // // //  const navigate = useNavigate();
// // // //  const {user} = useSelector((state) => state.auth);
// // // //  const {orders,loading,error} = useSelector((state) => state.adminOrders);

// // // //  useEffect (() => {
// // // //   if (!user || user.role !=="admin"){
// // // //     navigate("/");
// // // //   } else {
// // // //     dispatch(fetchAllOrders());
// // // //   }
// // // //  }, [dispatch,user,navigate]);


// // // //   const handleStatusChange = (orderId,status) =>{
// // // //     // console.log({id:orderId,status});
// // // //     dispatch(updateOrderStatus({id:orderId,status}));
// // // //   };

// // // //   if(loading) return <p>Loading...</p>
// // // //   if (error) return <p>Error:{error}</p>

// // // //   return (
// // // //     <div className="max-w-7xl mx-auto p-6">
// // // //       <h2 className="text-2xl font-bold mb-6">Order Management</h2>
// // // //       <div className="overflow-x-auto shadow-md sm:rounded-lg">
// // // //         <table className="min-w-full text-left text-gray-500">
// // // //           <thead className="bg-gray-100 text-xs uppercase text-gray-700">
// // // //             <tr>
// // // //               <th className="py-3 px-4">OrderId</th>
// // // //               <th className="py-3 px-4">Customer</th>
// // // //               <th className="py-3 px-4">Total Price</th>
// // // //               <th className="py-3 px-4">Status</th>
// // // //               <th className="py-3 px-4">Actions</th>
// // // //             </tr>
// // // //           </thead>

// // // //           {/* ✅ FIXED: Moved conditional rendering inside tbody */}
// // // //           <tbody>
// // // //             {orders.length > 0 ? (
// // // //               orders.map((order) => (
// // // //                 <tr
// // // //                   key={order._id}
// // // //                   className="border-b hover:bg-gray-50 cursor-pointer"
// // // //                 >
// // // //                   <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
// // // //                     #{order._id}
// // // //                   </td>
// // // //                   <td className="py-4 px-4">{order.user.name}</td>
// // // //                   <td className="py-4 px-4">₹{order.totalPrice}</td>
// // // //                   <select  value={order.status} 
// // // //                   onChange={(e) => handleStatusChange(order._id,e.target.value) }
// // // //                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
// // // //                   focus:ring-blue-500 focus:border-blue-500 block p-2.5"
// // // //                   >
// // // //                     <option value="Processing">Processing</option>
// // // //                     <option value="Shipped">Shipped</option>
// // // //                     <option value="Delivered">Delivered</option>
// // // //                     <option value="Cancelled">Cancelled</option>
                    

// // // //                   </select>
// // // //                   <td className="p-4 ">
// // // //                     <button onClick={() => handleStatusChange(order._id,"Delivered")}
// // // //                         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // //                         >Mark as Deliverd</button>
// // // //                   </td>
                 
// // // //                 </tr>
// // // //               ))
// // // //             ) : (
// // // //               <tr>
// // // //                 <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
// // // //                   No orders found.
// // // //                 </td>
// // // //               </tr>
// // // //             )}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default OrderManagement;
// // // import { useEffect } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useNavigate } from "react-router-dom";
// // // import { fetchAllOrders, updateOrderStatus } from "../../redux/slice/adminOrderSlice";

// // // const OrderManagement = () => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const { user } = useSelector((state) => state.auth);
// // //   const { orders, loading, error } = useSelector((state) => state.adminOrders);

// // //   useEffect(() => {
// // //     if (!user || user.role !== "admin") {
// // //       navigate("/");
// // //     } else {
// // //       dispatch(fetchAllOrders());
// // //     }
// // //   }, [dispatch, user, navigate]);

// // //   const handleStatusChange = (orderId, status) => {
// // //     dispatch(updateOrderStatus({ id: orderId, status }));
// // //   };

// // //   if (loading)
// // //     return (
// // //       <div className="text-center mt-10 text-lg font-semibold">
// // //         Loading orders...
// // //       </div>
// // //     );
// // //   if (error)
// // //     return (
// // //       <div className="text-center mt-10 text-red-500">Error: {error}</div>
// // //     );

// // //   return (
// // //     <div className="max-w-7xl mx-auto p-6">
// // //       <h2 className="text-2xl font-bold mb-6">Order Management</h2>
// // //       <div className="overflow-x-auto shadow-md sm:rounded-lg">
// // //         <table className="min-w-full text-left text-gray-500">
// // //           <thead className="bg-gray-100 text-xs uppercase text-gray-700">
// // //             <tr>
// // //               <th className="py-3 px-4">OrderId</th>
// // //               <th className="py-3 px-4">Customer</th>
// // //               <th className="py-3 px-4">Total Price</th>
// // //               <th className="py-3 px-4">Status</th>
// // //               <th className="py-3 px-4">Actions</th>
// // //             </tr>
// // //           </thead>

// // //           <tbody>
// // //             {orders.length > 0 ? (
// // //               orders.map((order) => (
// // //                 <tr
// // //                   key={order._id}
// // //                   className="border-b hover:bg-gray-50 cursor-pointer"
// // //                 >
// // //                   <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
// // //                     #{order._id}
// // //                   </td>
// // //                   <td className="py-4 px-4">{order.user.name}</td>
// // //                   <td className="py-4 px-4">₹{order.totalPrice}</td>

// // //                   {/* ✅ FIX 1: Moved <select> inside a <td> */}
// // //                   <td className="py-4 px-4">
// // //                     <select
// // //                       value={order.status}
// // //                       onChange={(e) =>
// // //                         handleStatusChange(order._id, e.target.value)
// // //                       }
// // //                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
// // //                         focus:ring-blue-500 focus:border-blue-500 block p-2.5"
// // //                     >
// // //                       <option value="Processing">Processing</option>
// // //                       <option value="Shipped">Shipped</option>
// // //                       <option value="Delivered">Delivered</option>
// // //                       <option value="Cancelled">Cancelled</option>
// // //                     </select>
// // //                   </td>

// // //                   {/* ✅ FIX 2: Typo in button label fixed */}
// // //                   <td className="py-4 px-4">
// // //                     <button
// // //                       onClick={() =>
// // //                         handleStatusChange(order._id, "Delivered")
// // //                       }
// // //                       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // //                     >
// // //                       Mark as Delivered
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))
// // //             ) : (
// // //               <tr>
// // //                 <td
// // //                   colSpan="5"
// // //                   className="py-4 px-4 text-center text-gray-500"
// // //                 >
// // //                   No orders found.
// // //                 </td>
// // //               </tr>
// // //             )}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default OrderManagement;
// // import { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   fetchAllOrders,
// //   updateOrderStatus,
// // } from "../../redux/slice/adminOrderSlice";

// // const OrderManagement = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const { user } = useSelector((state) => state.auth);
// //   const { orders, loading, error } = useSelector((state) => state.adminOrders);

// //   useEffect(() => {
// //     if (!user || user.role !== "admin") {
// //       navigate("/");
// //     } else {
// //       dispatch(fetchAllOrders());
// //     }
// //   }, [dispatch, user, navigate]);

// //   const handleStatusChange = (orderId, status) => {
// //     dispatch(updateOrderStatus({ id: orderId, status }));
// //   };

// //   if (loading)
// //     return (
// //       <div className="text-center mt-10 text-lg font-semibold">
// //         Loading orders...
// //       </div>
// //     );

// //   if (error)
// //     return (
// //       <div className="text-center mt-10 text-red-500">Error: {error}</div>
// //     );

// //   return (
// //     <div className="max-w-7xl mx-auto p-6">
// //       <h2 className="text-2xl font-bold mb-6">Order Management</h2>
// //       <div className="overflow-x-auto shadow-md sm:rounded-lg">
// //         <table className="min-w-full text-left text-gray-500">
// //           <thead className="bg-gray-100 text-xs uppercase text-gray-700">
// //             <tr>
// //               <th className="py-3 px-4">OrderId</th>
// //               <th className="py-3 px-4">Customer</th>
// //               <th className="py-3 px-4">Total Price</th>
// //               <th className="py-3 px-4">Status</th>
// //               <th className="py-3 px-4">Actions</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {orders.length > 0 ? (
// //               orders.map((order) => (
// //                 <tr
// //                   key={order._id}
// //                   className="border-b hover:bg-gray-50 cursor-pointer"
// //                 >
// //                   <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
// //                     #{order._id}
// //                   </td>

// //                   {/* ✅ FIXED: Safely access user.name */}
// //                   <td className="py-4 px-4">
// //                     {order.user?.name || "Guest/Deleted User"}
// //                   </td>

// //                   <td className="py-4 px-4">₹{order.totalPrice}</td>

// //                   <td className="py-4 px-4">
// //                     <select
// //                       value={order.status}
// //                       onChange={(e) =>
// //                         handleStatusChange(order._id, e.target.value)
// //                       }
// //                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
// //                         focus:ring-blue-500 focus:border-blue-500 block p-2.5"
// //                     >
// //                       <option value="Processing">Processing</option>
// //                       <option value="Shipped">Shipped</option>
// //                       <option value="Delivered">Delivered</option>
// //                       <option value="Cancelled">Cancelled</option>
// //                     </select>
// //                   </td>

// //                   <td className="py-4 px-4">
// //                     <button
// //                       onClick={() =>
// //                         handleStatusChange(order._id, "Delivered")
// //                       }
// //                       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// //                     >
// //                       Mark as Delivered
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td
// //                   colSpan="5"
// //                   className="py-4 px-4 text-center text-gray-500"
// //                 >
// //                   No orders found.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderManagement;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAllOrders,
//   updateOrderStatus,
//   deleteOrder,
// } from "../../redux/slice/adminOrderSlice";

// const OrderManagement = () => {
//   const dispatch = useDispatch();

//   const { orders, totalSales, totalOrders, loading, error } = useSelector(
//     (state) => state.adminOrders
//   );

//   useEffect(() => {
//     dispatch(fetchAllOrders());
//   }, [dispatch]);

//   const handleStatusChange = (id, status) => {
//     dispatch(updateOrderStatus({ id, status }));
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteOrder(id));
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Order Management</h2>

//       {loading ? (
//         <p>Loading orders...</p>
//       ) : error ? (
//         <p className="text-red-600">{error}</p>
//       ) : (
//         <>
//           <div className="mb-4">
//             <p>Total Orders: {totalOrders}</p>
//             <p>Total Sales: ₹{totalSales.toFixed(2)}</p>
//           </div>

//           <table className="min-w-full table-auto border">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-2 py-1">User</th>
//                 <th className="border px-2 py-1">Email</th>
//                 <th className="border px-2 py-1">Amount</th>
//                 <th className="border px-2 py-1">Status</th>
//                 <th className="border px-2 py-1">Change Status</th>
//                 <th className="border px-2 py-1">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   {/* ✅ FIXED: Safe access with fallback */}
//                   <td className="border px-2 py-1">
//                     {order.user?.name || "Unknown User"}
//                   </td>
//                   <td className="border px-2 py-1">
//                     {order.user?.email || "N/A"}
//                   </td>
//                   <td className="border px-2 py-1">₹{order.totalPrice}</td>
//                   <td className="border px-2 py-1">{order.status}</td>

//                   <td className="border px-2 py-1">
//                     <select
//                       className="border p-1"
//                       value={order.status}
//                       onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                     >
//                       <option value="Processing">Processing</option>
//                       <option value="Shipped">Shipped</option>
//                       <option value="Delivered">Delivered</option>
//                     </select>
//                   </td>

//                   <td className="border px-2 py-1">
//                     <button
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleDelete(order._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default OrderManagement;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllOrders,
  deleteOrder,
  updateOrderStatus,
  clearAdminOrderError,
  clearAdminOrderSuccess,
} from "../../redux/slice/adminOrderSlice";

const OrderManagement = () => {
  const dispatch = useDispatch();
  const { orders, totalSales, totalOrders, loading, error, success } = useSelector(
    (state) => state.adminOrders
  );

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearAdminOrderError());
    }

    if (success) {
      alert("Action completed successfully");
      dispatch(clearAdminOrderSuccess());
      dispatch(fetchAllOrders()); // Refresh after delete/update
    }
  }, [error, success, dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      dispatch(deleteOrder(id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateOrderStatus({ id, status: newStatus }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <>
          <div className="mb-4">
            <p>Total Orders: <strong>{totalOrders}</strong></p>
            <p>Total Sales: ₹<strong>{totalSales}</strong></p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Customer</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Total</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Change Status</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      No orders found.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order._id}>
                      <td className="border px-4 py-2">{order.user?.name || "Unknown"}</td>
                      <td className="border px-4 py-2">{order.user?.email || "N/A"}</td>
                      <td className="border px-4 py-2">₹{order.totalPrice}</td>
                      <td className="border px-4 py-2">{order.status}</td>
                      <td className="border px-4 py-2">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          className="border rounded px-2 py-1"
                        >
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderManagement;
