import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function Getfitat_Home({ image, title, address, value, pric }) {
  return (
    <div className="  w-[30%]  p-4 shadow-2xl mt-6 mb-5 rounded-lg   transition-all ease-in-out delay-100 ">
      <p className="mb-5 leading-normal">
        <Link className="  " to={address}>
          <img
            className="img w-full h-[300px] mb-3 bg-auto bg-no-repeat bg-center rounded "
            src={image}
          />
        </Link>
      </p>
      <p className="w-full hover:text-red-500 text-xl font-semibold tracking-tight text-black mb-3 shadow-sm shadow-blue-400/25">
        {title}
      </p>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
      <div className="text-left">{pric}</div>
    </div>
  );
}

export default Getfitat_Home;
