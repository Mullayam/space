import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
//Slices
import Space from "./slices/SpaceSlice";

export const store = configureStore({
  reducer: {
    Space,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
