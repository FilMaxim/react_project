import * as Yup from "yup";
import { country } from "../store/dataCountry";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Поле "имя" обязательно для заполнения')
    .matches(/^[A-ZА-Я]/, "Имя должно начинаться с заглавной буквы"),
  age: Yup.number()
    .required('Поле "возраст" обязательно для заполнения')
    .positive("Возраст должен быть положительным числом"),
  email: Yup.string()
    .required('Поле "электронная почта" обязательно для заполнения')
    .email("Некорректный адрес электронной почты"),
  password: Yup.string()
    .required('Поле "пароль" обязательно для заполнения')
    .min(8, "Должно содержать 8 символов")
    .matches(/[A-ZА-Я]/, "Должен содержать заглавную букву")
    .matches(/[a-zа-я]/, "Должен содержать строчную букву")
    .matches(/[0-9]/, "Должен содержать цифру")
    .matches(/[!@#$%^&*]/, "Должен содержать один специальный символ"),
  confirmPassword: Yup.string()
    .required('Поле "подтверждение пароля" обязательно для заполнения')
    .oneOf([Yup.ref("password"), ""], "Пароли должны совпадать"),
  gender: Yup.string()
    .required('Поле "пол" обязательно для заполнения')
    .oneOf(["female", "male"], 'Поле "пол" обязательно для заполнения'),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    "Вы должны принять условия и положения",
  ),
  imageFile: Yup.mixed()
    .required('Поле "изображение" обязательно для заполнения')
    .test("fileSize", "Размер файла должен быть не более 5 МБ", (value) => {
      if (value instanceof File) {
        return value.size <= 5 * 1024 * 1024;
      }
      return true;
    })
    .test("fileType", "Разрешены только файлы формата PNG и JPEG", (value) => {
      if (value instanceof File) {
        return ["image/png", "image/jpeg"].includes(value.type);
      }
      return true;
    }),
  country: Yup.string()
    .required('Поле "страна" обязательно для заполнения')
    .oneOf(country, "Страна должна быть реальная"),
});
