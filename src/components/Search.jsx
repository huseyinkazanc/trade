import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <form onSubmit={searchHandler}>
      <input
        placeholder="Search..."
        type="text"
        className="hidden sm:flex w-full py-2 pl-5 rounded-full outline-0 h-9"
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button className="absolute h-full right-0 rounded-r-full w-12 flex items-center justify-center bg-[#ffcf11]">
        <BiSearch className="text-[#0e112e] text-[25px] mr-1" />
      </button>
    </form>
  );
};

export default Search;
