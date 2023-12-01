import { ForwardedRef, forwardRef } from "react";
import { CustomInputProps } from "../../types";

const CustomTC = forwardRef(
  (
    { label, name, type, errors }: CustomInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div>
        <label htmlFor={name}>
          <input
            type={type}
            id={name}
            defaultChecked={false}
            name={name}
            ref={ref}
          />
          {label}:
        </label>
        {errors && <span>{errors}</span>}
      </div>
    );
  },
);

export default CustomTC;
