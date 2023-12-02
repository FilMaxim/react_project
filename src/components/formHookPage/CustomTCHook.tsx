import { FieldError, useFormContext } from "react-hook-form";
import { CustomInputProps } from "../../types";

const CustomTCHook = ({ label, name, type }: CustomInputProps) => {
  const {
    formState: { errors: hookFormErrors },
    register,
  } = useFormContext();
  const errorMessage = (hookFormErrors[name] as FieldError)?.message;
  return (
    <div>
      <label htmlFor={name}>
        <input
          {...register(name)}
          type={type}
          id={name}
          defaultChecked={false}
          name={name}
        />
        {label}:
      </label>
      <span>{errorMessage}</span>
    </div>
  );
};

export default CustomTCHook;
