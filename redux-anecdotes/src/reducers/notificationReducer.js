import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setMessage(state, action) {
      return action.payload
    },
    removeMessage() {
      return null
    }
  }
})

export const { setMessage, removeMessage } = notificationSlice.actions
export default notificationSlice.reducer