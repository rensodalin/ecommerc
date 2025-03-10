import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about" },
  { id: 3, name: "Men's Wear", link: "/Man" }, // Change link accordingly
  { id: 3, name: "Women Wear", link: "/Women" },
  { id: 4, name: "Contact Us", link: "/contact" }, // Change link accordingly
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 me-9">
              <img src={Logo} alt="Logo" className="w-10" />
              NorthStar
            </Link>
          </div>

          {/* Search Bar & Buttons */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Login & Sign Up Buttons */}
            <div className="flex items-center gap-4">
              <button className="py-2 px-4 text-white bg-primary rounded-md">
                Login
              </button>
              <button className="py-2 px-4 text-white bg-primary rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center bg-primary/40">
        <ul className="sm:flex hidden items-center gap-8 w-full justify-center bg-white px-8">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 py-2 hover:text-white duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
