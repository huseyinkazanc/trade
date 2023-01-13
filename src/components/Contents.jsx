import React from "react";

const Contents = () => {
  return (
    <div>
      <h1>Carhartt Men's Knit Cuffed Beanie</h1>
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
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Box>
        <div className="text-left">{pric}</div>
      </div>
    </div>
  );
};

export default Contents;
