import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../reducers/AuthReducer'

export default configureStore({
  reducer: {
    AuthReducer,
  },
})