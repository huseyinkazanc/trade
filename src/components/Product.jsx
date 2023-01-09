import React from "react";
import "./css/product.css";

function Product({ image, title }) {
  return (
    <div className="inclusive">
      <h1>{title}</h1>
      <img className="img" src={image} />
    </div>
  );
}

export default Product;
