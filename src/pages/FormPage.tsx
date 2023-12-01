import React, { useRef, useState } from "react";
import { validationSchema } from "../utils/validationSchema";
import { ValidationError } from "yup";
import { useDispatch } from "react-redux";
import { setFormData, setImage } from "../store/formSlice";
import { Header } from "../components/header/header";
import { CountryAutocomplete } from "../components/formPage/CountryAutocomplete";
import CustomInput from "../components/formPage/CustomInput";
import CustomGender from "../components/formPage/CustomGender";
import CustomTC from "../components/formPage/CustomTC";
import { useNavigate } from "react-router";

export const FormPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsAndConditionsRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const age = ageRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const gender = genderRef.current?.value;
    const termsAndConditions = termsAndConditionsRef.current?.checked;
    const imageFile = imageRef.current?.files?.[0];
    const country = countryRef.current?.value;

    // console.log(country)

    try {
      await validationSchema.validate(
        {
          name,
          age,
          email,
          password,
          confirmPassword,
          gender,
          termsAndConditions,
          imageFile,
          country,
        },
        { abortEarly: false },
      );
      dispatch(
        setFormData({
          name,
          age,
          email,
          password,
          confirmPassword,
          gender,
          termsAndConditions,
          country,
        }),
      );

      if (imageFile) {
        const reader = new FileReader();
        reader.onload = () => {
          dispatch(setImage(reader.result as string));
        };
        reader.readAsDataURL(imageFile);
      }
      console.log("все проверки пройдены", imageFile);
      setErrors({});
      navigate(`/`);
    } catch (error) {
      if (error instanceof ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path) validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <>
      <Header />
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Name"
          name="name"
          type={"text"}
          errors={errors.name}
          ref={nameRef}
        />
        <CustomInput
          label="Age"
          name="age"
          type={"number"}
          errors={errors.age}
          ref={ageRef}
        />
        <CustomInput
          label="Email"
          name="email"
          type={"text"}
          errors={errors.email}
          ref={emailRef}
        />
        <CustomInput
          label="Password"
          name="password"
          type={"password"}
          errors={errors.password}
          ref={passwordRef}
        />
        <CustomInput
          label="Confirm password"
          name="confirmPassword"
          type={"password"}
          errors={errors.password}
          ref={confirmPasswordRef}
        />
        <CustomGender
          label="Gender"
          name="gender"
          errors={errors.gender}
          ref={genderRef}
        />
        <CustomTC
          label={"Accept T&C"}
          name={"termsAndConditions"}
          type={"checkbox"}
          errors={errors.termsAndConditions}
          ref={termsAndConditionsRef}
        />
        <CustomInput
          label="Upload image"
          name="image"
          type={"file"}
          errors={errors.imageFile}
          ref={imageRef}
        />
        <CountryAutocomplete
          label="Country"
          name="country"
          type={"text"}
          errors={errors.country}
          ref={countryRef}
        />
        <button type="submit">Отправить</button>
      </form>
    </>
  );
};
