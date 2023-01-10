import React from "react";
import "./css/product.css";

function Product({ image, title }) {
  return (
    <div className="inclusive w-full  border-[#ededed] m-2 ">
      <h1 className="shadow-md shadow-gray-600">{title}</h1>
      <div className="w-full h-full">
        <img className="img object-cover aspect-square" src={image} />
      </div>
    </div>
  );
}

export default Product;
