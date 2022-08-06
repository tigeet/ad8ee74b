import { combineReducers, configureStore, EnhancedStore, getDefaultMiddleware, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import AppReducer from './slices/appSlice'
import PostReducer from './slices/postSlice'



const ll: Middleware<{}, RootState> = state => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', state.getState());
  console.groupEnd();
  return result;
};



const rootReducer = combineReducers({
  app: AppReducer,
  posts: PostReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(ll)
})

export { store }
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
