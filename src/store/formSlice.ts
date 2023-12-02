import { createSlice } from "@reduxjs/toolkit";

export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: "male" | "female";
  termsAndConditions: boolean;
  country: string;
  image?: string;
}

interface FormState {
  formData: FormData[];
}

const initialState: FormState = {
  formData: [],
};

export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData.push(action.payload);
    },
    setImage: (state, action) => {
      state.formData = state.formData.map((data, index) => {
        if (index === state.formData.length - 1) {
          return {
            ...data,
            image: action.payload,
          };
        }
        return data;
      });
    },
  },
});

export const { setFormData, setImage } = formSlice.actions;
export default formSlice.reducer;
