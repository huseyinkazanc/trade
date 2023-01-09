import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    setProducts(response.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="as">
      <h1 className="font-black text-xl">PRODUCTS PAGE</h1>
      <div className="products-container">
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            image={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
