import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    appendMessage(state, action) {
      return action.payload
    },

    clearNotification() {
      return null
    }
  }
})

export const setNotification = (message, timer) => {
  return async dispatch => {
    dispatch(appendMessage(message))
    await new Promise(resolve => setTimeout(resolve, timer))
    dispatch(clearNotification())
  }
}

export const { appendMessage, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer