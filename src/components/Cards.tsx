import React from "react";
import { FormData } from "../types";

const Cards = ({ data }: { data: FormData }) => {
  return (
    <>
      <div className="information">
        <h2>{data.name} information: </h2>
        <ul>
          <li>
            {data.image && (
              <img className="image_user" src={data.image} alt="Изображение" />
            )}
          </li>
          <li>Name: {data.name}</li>
          <li>Country: {data.country}</li>
          <li>Age: {data.age}</li>
          <li>Email: {data.email}</li>
          <li>Password: {data.password}</li>
          <li>Gender: {data.gender}</li>
        </ul>
      </div>
    </>
  );
};

export default Cards;
