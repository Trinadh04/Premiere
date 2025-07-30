
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔶 Fetch all orders (with total sales)
export const fetchAllOrders = createAsyncThunk(
  "adminOrders/fetchAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      return response.data; // Expecting: { orders: [...], totalSales: number }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch orders");
    }
  }
);

// ✏️ FIXED: Corrected `id` destructuring and usage
export const updateOrderStatus = createAsyncThunk(
  "adminOrders/updateOrderStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update order status");
    }
  }
);

// 🗑️ FIXED: Corrected token key to lowercase "userToken"
export const deleteOrder = createAsyncThunk(
  "adminOrders/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete order");
    }
  }
);

// 🧩 Slice
const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState: {
    orders: [],
    totalOrders: 0,
    totalSales: 0,
    loading: false,
    error: null,
  },
  reducers: {
    clearAdminOrderError: (state) => {
      state.error = null;
    },
    clearAdminOrderSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔄 Fetch All Orders
      .addCase(fetchAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
     
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
  state.loading = false;

  const orders = action.payload?.orders || []; // ✅ safe fallback
  state.orders = orders;
  state.totalOrders = orders.length;

  const totalSales = orders.reduce((acc, order) => {
    return acc + order.totalPrice;
  }, 0);
  state.totalSales = totalSales;
})

      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Update Order Status (with success flag)
.addCase(updateOrderStatus.fulfilled, (state, action) => {
  const updatedOrder = action.payload;
  const orderIndex = state.orders.findIndex(
    (order) => order._id === updatedOrder._id
  );
  if (orderIndex !== -1) {
    state.orders[orderIndex] = updatedOrder;
    state.success = true; // ✅ added this line
  }
})


      // ✅ Delete Order
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter((order) => order._id !== action.payload);
        state.success = true;
      });
  },
});

export const { clearAdminOrderError, clearAdminOrderSuccess } = adminOrderSlice.actions;
export default adminOrderSlice.reducer;
