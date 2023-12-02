import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import countrySlice from "./countrySlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    formData: formSlice,
    country: countrySlice,
  },
});
