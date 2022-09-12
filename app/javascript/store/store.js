import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messagesReducer";

const store = configureStore({
  reducer: {
    message: messagesReducer,
  },
});

export default store;