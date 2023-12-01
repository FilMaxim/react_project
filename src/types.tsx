export type InputPropsErrors = {
  errors: { [key: string]: string };
  onNameChange: (key: string) => void;
};

export type CustomInputProps = {
  label: string;
  name: string;
  type: string;
  errors?: string | undefined;
};

export type CustomGenderProps = {
  label: string;
  name: string;
  errors?: string | undefined;
};

export interface VisibilityIconProps {
  handleVisibility: () => void;
  passwordVisibility: boolean;
}

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
