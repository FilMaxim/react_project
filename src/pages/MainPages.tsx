import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Header } from "../components/header/header";
import Cards from "../components/Cards";

export const MainPage = () => {
  const formData = useSelector((state: RootState) => state.formData);
  return (
    <>
      <Header />
      <h2>Main Page</h2>
      <section className="wrapper_cards">
        {Array.isArray(formData.formData) &&
          formData.formData.length !== 0 &&
          formData.formData.map((data) => (
            <div className="card" key={data.password}>
              <Cards data={data} />
            </div>
          ))}
      </section>
    </>
  );
};
