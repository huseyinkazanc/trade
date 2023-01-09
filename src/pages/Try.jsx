import React from "react";
import { useEffect, useState } from "react";
function Try() {
  const [data, setData] = useState([]);
  const dataIn = data.products;
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    setData(response.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  (function () {
    //console.log(data.map((huseyin) => huseyin.id));
  })();
  (function () {
    //console.log(data.find((huseyin) => huseyin.title === "iPhone X"));
    console.log(
      data
        .map((huseyin) => huseyin.title)
        .concat(data.map((huseyin) => huseyin.description))
    );
  })();
}

export default Try;
