import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import countrySlice from "./countrySlice";
import formHookSlice from "./formHookSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    formData: formSlice,
    formHookData: formHookSlice,
    country: countrySlice,
  },
});
