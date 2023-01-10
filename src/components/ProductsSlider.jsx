import { Navigation, Pagination, FreeMode, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Product from "./Product";
import { useEffect, useState } from "react";

export const ProductsSlider = () => {
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
    <div className="w-[70%] mx-auto mb-10">
      <Swiper
        // install Swiper modules

        spaceBetween={10}
        slidesPerView={3}
        navigation
        className="h-[18rem]"
        freeMode={true}
        modules={[FreeMode, Navigation, Pagination]}
      >
        {products.map((product, index) => (
          <SwiperSlide>
            <Product
              key={index}
              title={product.title}
              image={product.thumbnail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductsSlider;
