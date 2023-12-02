import { FieldError, useFormContext } from "react-hook-form";
import { CustomGenderProps } from "../../types";

const CustomGenderHook = ({ label, name }: CustomGenderProps) => {
  const {
    formState: { errors: hookFormErrors },
    register,
  } = useFormContext();
  const errorMessage = (hookFormErrors[name] as FieldError)?.message;
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <select {...register(name)} id={name} name={name}>
        <option value="">Выберите пол</option>
        <option value="female">male</option>
        <option value="male">female</option>
      </select>
      <span>{errorMessage}</span>
    </div>
  );
};

export default CustomGenderHook;
