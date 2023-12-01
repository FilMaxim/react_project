import { ForwardedRef, forwardRef, useState } from "react";
import { CustomInputProps } from "../../types";
import { VisibilityIcon } from "../ui/visibilityIcon";

const CustomInput = forwardRef(
  (
    { label, name, type, errors }: CustomInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [passwordVisibility, setPasswordVisibility] =
      useState<boolean>(false);
    const [typeInput, setTypeInput] = useState<string>(type);
    const handleVisibility = () => {
      setPasswordVisibility((prev: boolean) => !prev);
      setTypeInput(passwordVisibility ? type : "text");
    };

    return (
      <div>
        <label htmlFor={name}>{label}:</label>
        <input type={typeInput} id={name} name={name} ref={ref} />
        {type === "password" && (
          <VisibilityIcon
            handleVisibility={handleVisibility}
            passwordVisibility={passwordVisibility}
          />
        )}
        {errors && <span>{errors}</span>}
      </div>
    );
  },
);

export default CustomInput;
