import "./css/Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { FaShopify } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/kazanc.png";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleChange = (e) => {
    const UsingFetch = () => {
      const [users, setUsers] = useState([]);

      const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setUsers(data);
          });
      };

      useEffect(() => {
        fetchData();
      }, []);
    };
  };

  return (
    // <>
    //   <Deneme />
    // </>
    <div className="flex items-center justify-between bg-[#131820] lg:px-6 ">
      <div className="flex items-center justify-center w-[15%] py-3">
        <img src={logo} className="lg:w-[69%] sm:pl-2"></img>
      </div>

      <div className="relative w-[30%]  flex justify-evenly   ">
        {/*className="hidden md:flex w-full justify-around text-2xl text-[#00F684]" */}

        <ul
          className={`menuNav ${
            navbarOpen ? " showMenu" : ""
          } md:text-xl md:flex items-center md:justify-between gap-14 text-[#00F684]`}
        >
          <div
            className="lg:hidden md:hidden sm:visible text-gray-400 cursor-pointer hover:text-gray-500"
            onClick={handleToggle}
          >
            X
          </div>
          <li className="ml-2">
            <Link to="/" className="hover:text-[#0095FF]">
              Home
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/products" className="hover:text-[#0095FF]">
              Products
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/trendkolik" className="hover:text-[#0095FF]">
              Trend Kolik
            </Link>
          </li>
        </ul>
      </div>

      <div className="relative w-[28%] hidden md:flex ">
        <input
          placeholder="Search..."
          onChange={handleChange}
          type="text"
          className="hidden sm:block w-3/4 py-2 pl-5 rounded-r-none rounded-l-full outline-0"
        />
        <button className=" p-[5px] rounded-r-full w-[15%]  flex items-center justify-center bg-[#ffcf11]">
          <BiSearch className="text-[#0e112e] text-[25px]" />
        </button>
      </div>

      <div className=" flex items-center justify-end w-[27%] h-full sm:w-[30%] ">
        <div className="flex w-full sm:justify-around lg:justify-evenly ">
          <div className="flex items-center ">
            <FaUser className="text-[#0095FF] text-xl mr-1" />{" "}
            <span className="text-[#00F684]  hidden lg:flex">
              <Link to="/login">Giriş Yap</Link>
            </span>
          </div>
          <div className="flex items-center ">
            <BsFillHeartFill className="text-[#0095FF] text-xl mr-1" />{" "}
            <span className="text-[#00F684]  hidden lg:flex">
              <Link>Favorilerim</Link>
            </span>
          </div>
          <div className="flex items-center ">
            <HiShoppingCart className="text-[#0095FF] text-xl mr-1" />
            <span className="text-[#00F684]  hidden lg:flex">
              <Link>Sepetim</Link>
            </span>
          </div>
        </div>
      </div>

      <button
        data-collapse-toggle="navbar-search"
        type="button"
        className="inline-flex items-center p-2 lg:hidden sm:flex sm:w-[60px] text-2xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
        onClick={handleToggle}
      >
        <span className="sr-only">Open menu</span>
        <GiHamburgerMenu className="text-[#0095FF]" />
        {/* <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg> */}
      </button>
    </div>
  );
}

export default Navbar;
