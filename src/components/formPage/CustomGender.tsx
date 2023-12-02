import { ForwardedRef, forwardRef } from "react";
import { CustomGenderProps } from "../../types";

const CustomGender = forwardRef(
  (
    { label, name, errors }: CustomGenderProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    return (
      <div>
        <label htmlFor={name}>{label}:</label>
        <select id={name} name={name} ref={ref} defaultValue="">
          <option value="">Выберите пол</option>
          <option value="male">female</option>
          <option value="female">male</option>
        </select>
        {errors && <span>{errors}</span>}
      </div>
    );
  },
);

export default CustomGender;
