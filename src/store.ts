import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './slices/appSlice'


const store = configureStore({
  reducer: {
    app: AppReducer
  }
})


export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
