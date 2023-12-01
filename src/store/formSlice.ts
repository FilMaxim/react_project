import { createSlice } from "@reduxjs/toolkit";

interface FormState {
  formData: {
    name: string;
    age: number | null;
    email: string;
    password: string;
    confirmPassword: string;
    gender: "male" | "female";
    termsAndConditions: boolean;
    country: string;
    image: string | null;
  };
}

const initialState: FormState = {
  formData: {
    name: "",
    age: null,
    email: "",
    password: "",
    confirmPassword: "string",
    gender: "male",
    termsAndConditions: false,
    country: "",
    image: null,
  },
};

export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setImage: (state, action) => {
      state.formData.image = action.payload;
    },
  },
});

export const { setFormData, setImage } = formSlice.actions;
export default formSlice.reducer;
