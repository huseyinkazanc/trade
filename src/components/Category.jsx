import React from "react";

function Category({ image, title }) {
  return (
    <div className="w-[25%] p-4 shadow-2xl mt-5">
      <p className="w-full text-xl font-semibold tracking-tight text-blue-600 mb-3 shadow-sm shadow-blue-400/25">
        {title}
      </p>
      <p className="mb-2 leading-normal">
        <img className="img w-full h-[400px] mb-3" src={image} />
        react tailwind css card with image It is a long established fact that a
        reader will be distracted by the readable content.
      </p>
      <p className=" py-2 text-md left-0 text-blue-100 bg-blue-500 rounded shadow">
        Shop now
      </p>
    </div>
  );
}

export default Category;
