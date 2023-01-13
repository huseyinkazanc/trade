import React from "react";
import Getfitat_Home from "../components/Getfitat_Home";
import ProductFilter from "../components/ProductFilter";

function GetfitatHome() {
  return (
    <div className="flex w-full ">
      <div className="inline-block left-0 w-[20%] h-full">
        <ProductFilter />
      </div>
      <div className="inline-block right-0 w-[80%] h-full ">
        <h1 className="inline-block mt-8 mb-6 text-lg font-bold shadow-md shadow-neutral-400/50">
          Get Fit At Home
        </h1>
        {/*Products cards*/}
        <div className="w-[100%]  flex justify-center gap-10">
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/81MSnS4nUnL._AC_UL480_QL65_.jpg"
            }
            title={"Carhartt Men's Knit Cuffed Beanie"}
            address="../productpage"
            value={3.5}
            pric={"$17.99-$46.92"}
          />
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/71C46C+QgJL._AC_UL480_QL65_.jpg"
            }
            title={"SUPRUS Lighter Electric Lighter Candle Lighter USB Type C "}
            address="/"
            value={2.5}
            pric={"$13.99"}
          />
          <Getfitat_Home
            title={"Create with strip lights"}
            image={
              "https://m.media-amazon.com/images/I/61gMO-vbEsL._AC_UL480_QL65_.jpg"
            }
            address="/"
            value={1.5}
            pric={"$24.92-$32.72"}
          />
        </div>
        <div className="w-[100%]  flex justify-center gap-10">
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/81FQCYRrv6L._AC_UL480_QL65_.jpg"
            }
            title={
              "Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag, Set of 5"
            }
            address="/"
            value={4}
            pric={"$12.95"}
          />
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/71hhrIZQwGL._AC_UL480_QL65_.jpg"
            }
            title={
              "MEIRUBY Lighter Electric Lighter Candle Lighter Rechargeable USB "
            }
            address="/"
            value={1}
            pric={"$8.99 "}
          />
          <Getfitat_Home
            title={"Fitbit Charge 5 Advanced Fitness & Health Tracker"}
            image={
              "https://m.media-amazon.com/images/I/71Q+Bf1b26L._AC_UL480_QL65_.jpg"
            }
            address="/"
            value={1.5}
            pric={"$99.95 "}
          />
        </div>
        <div className="w-[100%]  flex justify-center gap-10">
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/8133BQUVrEL._AC_UL480_QL65_.jpg"
            }
            title={
              "GearLight Flashlight 2pk Bright, Zoomable Tactical Flashlights High"
            }
            address="/"
            value={4.3}
            pric={"$29.94"}
          />
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/71EX4WAj4rL._AC_UL480_QL65_.jpg"
            }
            title={"Dickies Men's Dri-tech Moisture"}
            address="/"
            value={2.8}
            pric={"$10"}
          />
          <Getfitat_Home
            title={"UV Flashlight Black Light"}
            image={
              "https://m.media-amazon.com/images/I/91uF1A3calL._AC_UL480_QL65_.jpg"
            }
            address="/"
            value={3}
            pric={"$10.99 "}
          />
        </div>
        <div className="w-[100%]  flex justify-center gap-10">
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/817EpDqsL-L._AC_UL480_FMwebp_QL65_.jpg"
            }
            title={"Band Aid Brand Flexible Fabric"}
            address="/"
            value={3.5}
            pric={"$7"}
          />
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/9171uzu8PEL._AC_UL480_FMwebp_QL65_.jpg"
            }
            title={"Fuinloth Balaclava Face Mask"}
            address="/"
            value={2.5}
            pric={"$6.99"}
          />
          <Getfitat_Home
            title={"Jeasona Women's Cat Socks Cute"}
            image={
              "https://m.media-amazon.com/images/I/81gsRUizMXL._AC_UL480_FMwebp_QL65_.jpg"
            }
            address="/"
            value={3.5}
            pric={"$13.99"}
          />
        </div>
        <div className="w-[100%]  flex justify-center gap-10">
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/71jKDgN926L._AC_UL480_FMwebp_QL65_.jpg"
            }
            title={"adidas Athletic 6-Pack Crew Socks"}
            address="/"
            value={3.5}
            pric={"$17.99"}
          />
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/91yuQpw++mL._AC_UL480_FMwebp_QL65_.jpg"
            }
            title={"Dickies Men's Dri-tech Moisture "}
            address="/"
            value={2.5}
            pric={"$13"}
          />
          <Getfitat_Home
            title={"Band-Aid Brand Adhesive Bandages"}
            image={
              "https://m.media-amazon.com/images/I/71XHPuLiHVL._AC_UL480_FMwebp_QL65_.jpg"
            }
            address="/"
            value={1.5}
            pric={"$14.56"}
          />
        </div>
        <div className="w-[100%]  flex justify-center gap-10">
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/71Z29rLK4ML._AC_UL480_FMwebp_QL65_.jpg"
            }
            title={"Amazon Basics 1/2-Inch Extra Thick Exercise Yoga Mat"}
            address="/"
            value={3.5}
            pric={"$19.47"}
          />
          <Getfitat_Home
            image={
              "https://m.media-amazon.com/images/I/61gFrSlmofL._AC_UL480_FMwebp_QL65_.jpg"
            }
            title={"Amazon Basics High-Density Round"}
            address="/"
            value={3.1}
            pric={"$18.35"}
          />
          <Getfitat_Home
            title={"Nike Everyday Cushion Crew Training Socks"}
            image={
              "https://m.media-amazon.com/images/I/51tNe5Er1hL._AC_UL480_FMwebp_QL65_.jpg"
            }
            address="/"
            value={4.2}
            pric={"$16.65"}
          />
        </div>
      </div>
    </div>
  );
}

export default GetfitatHome;
