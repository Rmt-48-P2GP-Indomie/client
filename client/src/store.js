import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './features/registerSlice'
import loginReducer from './features/loginSlice'
import userListReducer from './features/userListSlice'
import chatMessagesReducer from './features/chatMessagesSlice'

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    userList: userListReducer,
    chatMessages: chatMessagesReducer
  },
})