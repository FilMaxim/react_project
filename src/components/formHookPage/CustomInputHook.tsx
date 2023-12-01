import { FieldError, useFormContext } from "react-hook-form";
import { CustomInputProps } from "../../types";
import { VisibilityIcon } from "../ui/visibilityIcon";
import { useState } from "react";

const CustomInputHook = ({ label, name, type }: CustomInputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [typeInput, setTypeInput] = useState<string>(type);

  const handleVisibility = () => {
    setPasswordVisibility((prev: boolean) => !prev);
    setTypeInput(passwordVisibility ? type : "text");
  };
  const {
    formState: { errors: hookFormErrors },
    register,
  } = useFormContext();
  const errorMessage = (hookFormErrors[name] as FieldError)?.message;

  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input {...register(name)} id={name} type={typeInput} name={name} />
      {type === "password" && (
        <VisibilityIcon
          handleVisibility={handleVisibility}
          passwordVisibility={passwordVisibility}
        />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default CustomInputHook;
