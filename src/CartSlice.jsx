import { createSlice } from '@reduxjs/toolkit';
import { ssrExportAllKey } from 'vite/runtime';


export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // Increment quantity if the item already exists
        existingItem.quantity += 1;
      } else {
        // Add new item with initial quantity of 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Remove item based on name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // Update the quantity of the item
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exporting the actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporting the reducer as the default export
export default CartSlice.reducer;
