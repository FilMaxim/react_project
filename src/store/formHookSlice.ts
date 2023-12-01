import { createSlice } from "@reduxjs/toolkit";

interface FormStateHook {
  formData: {
    name: string;
    age: number | null;
    email: string;
    password: string;
    confirmPassword: string;
    gender: "male" | "female";
    termsAndConditions: boolean;
    image: File | null;
  };
}

const initialState: FormStateHook = {
  formData: {
    name: "",
    age: null,
    email: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    termsAndConditions: false,
    image: null,
  },
};

export const formHookSlice = createSlice({
  name: "formHookData",
  initialState,
  reducers: {
    setFormHookData: (state, action) => {
      state.formData = action.payload;
    },
    setHookImage: (state, action) => {
      state.formData.image = action.payload;
    },
  },
});

export const { setFormHookData, setHookImage } = formHookSlice.actions;
export default formHookSlice.reducer;
