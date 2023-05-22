import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import imageReducer from "./slices/imageState";

export const store = configureStore({
  reducer: {
    image: imageReducer,
  },
  middleware: [logger],
});
