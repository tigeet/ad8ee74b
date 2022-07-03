import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './slices/appSlice'
import PostReducer from './slices/postSlice'


const store = configureStore({
  reducer: {
    app: AppReducer,
    posts: PostReducer,
  }
})


export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
