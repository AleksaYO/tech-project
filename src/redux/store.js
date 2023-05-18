import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./slice";

export const store = configureStore({
  reducer: userReduser,
});
