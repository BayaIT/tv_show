import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import favoritesReducer from "./slices/favoriteSlice";
import userReducer from "./slices/userSlice";
import registrationMiddleware from "./middleware/registration/registrationMiddleware";


const rootReducer = combineReducers({
  post: postsReducer,
  favorite: favoritesReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registrationMiddleware),
});