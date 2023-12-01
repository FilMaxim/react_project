import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Header } from "../components/header/header";
import Cards from "../components/Cards";

export const MainPage = () => {
  const formData = useSelector((state: RootState) => state.formData);
  console.log(Array.isArray(formData.formData));
  return (
    <>
      <Header />
      <h2>Главная страница</h2>
      {Array.isArray(formData.formData) &&
        formData.formData.length !== 0 &&
        formData.formData.map((data) => (
          <div key={data.password}>
            <Cards data={data} />
          </div>
        ))}
    </>
  );
};
