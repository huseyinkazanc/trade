import React from "react";
import MainSlider from "../components/MainSlider";
import Category from "../components/Category";
import ProductsSlider from "../components/ProductsSlider";
function Home() {
  return (
    <>
      <MainSlider className="" />
      <div className="flex justify-center w-[100%] sm:[50%]  gap-10">
        <Category
          title={"Get fit at home"}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          }
          address="./gitfitathome"
        />
        <Category
          title={"Health & Personal Care"}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
          }
          address="./products"
        />
        <Category
          title={"Electronics"}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          }
          address="./products"
        />
      </div>
      <div className="w-[100%]  flex justify-center gap-10">
        <Category
          title={"Dresses"}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
          }
          address="./products"
        />
        <Category
          title={"Shop Laptops & Tablets"}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
          }
          address="./products"
        />
        <Category
          title={"Create with strip lights"}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
          }
          address="./products"
        />
      </div>
      <div className="w-[100%]  flex justify-center gap-10">
        <Category
          title={"Shop activity trackers and smartwatches"}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          }
          address="./products"
        />
        <Category
          title={"For your Fitness Needs"}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
          }
          address="./products"
        />
        <Category
          title={"Deals & Promotions"}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
          }
          address="./products"
        />
      </div>
      <div className="w-[100%]  flex justify-center gap-10">
        <Category
          title={"Easy returns"}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
          }
          address="./products"
        />
        <Category
          title={"Kindle E readers"}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
          }
          address="./products"
        />
        <Category
          title={"New arrivals in Toys"}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
          }
          address="./products"
        />
      </div>

      <ProductsSlider />
    </>
  );
}

export default Home;
