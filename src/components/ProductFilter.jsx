import React from "react";

function ProductFilter() {
  return (
    <div className="bg-[#f4f2f2] shadow-lg h-[50%]">
      <span className="inline-block mt-5 text-[#131820]">Product Filter</span>
      <div className="left-0">
        <div className="fltrs-wrppr hide-fltrs">
          <input type="checkbox" />
          Price
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
