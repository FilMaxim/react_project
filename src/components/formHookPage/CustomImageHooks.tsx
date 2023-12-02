import { ChangeEvent } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { CustomInputProps } from "../../types";

const CustomPhoto = ({ label, name, type }: CustomInputProps) => {
  const {
    formState: { errors: hookFormErrors },
    setValue,
    register,
  } = useFormContext(); // Specify the form data type

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    setValue(name, file);
    register(name, { value: file });
  };

  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input type={type} id={name} onChange={handleFileChange} />
      <span>{(hookFormErrors[name] as FieldError)?.message}</span>
    </div>
  );
};

export default CustomPhoto;
