import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Header } from "../components/header/header";

export const MainPage: React.FC = () => {
  const { name, age, email, password, gender, image, country } = useSelector(
    (state: RootState) => state.formData.formData,
  );

  console.log(name, age);
  return (
    <>
      <Header />
      <h2>Main Page</h2>
      {name && (
        <div className="information">
          <h2>User Information</h2>
          <ul>
            <li>
              {image && (
                <img className="image_user" src={image} alt="Изображение" />
              )}
            </li>
            ;<li>Name: {name}</li>
            <li>Country: {country}</li>
            <li>Age: {age}</li>
            <li>Email: {email}</li>
            <li>Password: {password}</li>
            <li>Gender: {gender}</li>
          </ul>
        </div>
      )}
    </>
  );
};
