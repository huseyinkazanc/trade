import React from "react";
import { Link } from "react-router-dom";

function Category({ image, title, address }) {
  return (
    <div className="w-[25%]  p-4 shadow-2xl mt-6 mb-5 rounded-lg hover:bg-[#f0eeee]  transition-all ease-in-out delay-100 ">
      <p className="w-full text-xl font-semibold tracking-tight text-blue-600 mb-3 shadow-sm shadow-blue-400/25">
        {title}
      </p>
      <p className="mb-5 leading-normal">
        <img
          className="img w-full h-[400px] mb-3 bg-auto bg-no-repeat bg-center rounded "
          src={image}
        />
      </p>

      <Link
        to={address}
        className="w-[50%] text-md py-2 p-3 hover:bg-[#04F684] hover:text-blue-600 transition-all ease-in-out delay-100  text-[#131820]  rounded shadow-sm shadow-slate-500/50  "
      >
        Shop now
      </Link>
    </div>
  );
}

export default Category;
