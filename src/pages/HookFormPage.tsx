import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { Header } from "../components/header/header";
import { validationSchema } from "../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomGenderHook from "../components/formHookPage/CustomGenderHook";
import CustomTCHook from "../components/formHookPage/CustomTCHook";
import CustomInputHook from "../components/formHookPage/CustomInputHook";
import CountryAutocompleteHooks from "../components/formHookPage/CustomCountryHooks";
import CustomPhoto from "../components/formHookPage/CustomImageHooks";
import { setFormData, setImage } from "../store/formSlice";
import { useNavigate } from "react-router";

export interface HookFormData {
  name?: string;
  age?: number | null;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  termsAndConditions?: boolean;
  country?: string;
  imageFile?: unknown;
}

const HookFormPage = () => {
  const dispatch = useDispatch();
  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data: HookFormData) => {
    const {
      name,
      age,
      email,
      password,
      confirmPassword,
      gender,
      termsAndConditions,
      country,
    } = data;

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

    if (data.imageFile instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setImage(reader.result as string));
      };
      reader.readAsDataURL(data.imageFile);
    }
    navigate(`/`);
  };

  return (
    <>
      <Header />
      <h2>Hook Form Page</h2>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <CustomInputHook label="Name" name="name" type={"text"} />
          <CustomInputHook label="Age" name="age" type={"number"} />
          <CustomInputHook label="Email" name="email" type={"email"} />
          <CustomInputHook label="Password" name="password" type={"password"} />
          <CustomInputHook
            label="Confirm password"
            name="confirmPassword"
            type={"password"}
          />
          <CustomGenderHook label="Gender" name="gender" />
          <CustomTCHook
            label={"Accept T&C"}
            name={"termsAndConditions"}
            type={"checkbox"}
          />
          <CustomPhoto
            label={"Upload image"}
            name={"imageFile"}
            type={"file"}
          />
          <CountryAutocompleteHooks
            label={"Country"}
            name={"country"}
            type={"text"}
          />
          <button type="submit">Отправить</button>
        </form>
      </FormProvider>
    </>
  );
};

export default HookFormPage;
