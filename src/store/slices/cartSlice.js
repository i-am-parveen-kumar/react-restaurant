import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id].push(action.payload)
      } else {
        state.items[action.payload.id] = [action.payload]
      }
    },
    removeItem: (state, action) => {
      state.items[action.payload]?.pop()

      if (state.items[action.payload]?.length == 0) {
        delete state.items[action.payload]
      }
    },
    clearCart: state => {
      state.items = {}
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
