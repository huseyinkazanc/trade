import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import sl1 from "../assets/sl1.jpg";
import sl2 from "../assets/sl2.jpg";
import sl3 from "../assets/sl3.jpg";
import sl4 from "../assets/sl4.jpg";
import sl5 from "../assets/sl5.jpg";
import sl6 from "../assets/sl6.jpg";
import sl7 from "../assets/sl7.jpg";

export const MainSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        className="h-[18rem]"
      >
        <SwiperSlide>
          <img className="w-full object-contain" src={sl1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-contain" src={sl2}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-contain" src={sl3}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-contain" src={sl4}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-contain" src={sl5}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-contain" src={sl6}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-contain" src={sl7}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MainSlider;
