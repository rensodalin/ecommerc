import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about" },
  { id: 3, name: "Men's Wear", link: "/Man" }, // Change link accordingly
  { id: 3, name: "Women Wear", link: "/Women" },
  { id: 4, name: "Contact Us", link: "/contact" }, // Change link accordingly
];

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const switchToSignUp = () => {
    setShowSignInPopup(false);
    setShowSignUpPopup(true);
  };

  const switchToSignIn = () => {
    setShowSignUpPopup(false);
    setShowSignInPopup(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    // Create a search mapping object
    const searchMapping = {
      'home': '/',
      'about': '/about',
      'about us': '/about',
      'men': '/Man',
      'man': '/Man',
      "men's": '/Man',
      "men's wear": '/Man',
      'women': '/Women',
      'woman': '/Women',
      "women's": '/Women',
      "women's wear": '/Women',
      'contact': '/contact',
      'contact us': '/contact',
      'shirts': '/Man/shirts',
      'dresses': '/Women/dresses',
    };

    if (searchMapping[query]) {
      navigate(searchMapping[query]);
      setSearchQuery("");
    } else {
      alert("No information found for your search query!");
    }
  };

  const handleCartClick = () => {
    if (!isAuthenticated) {
      setShowSignInPopup(true);
    } else {
      navigate('/Women');
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowSignInPopup(false);
  };

  return (
    <>
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
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-3"
                  >
                    <IoMdSearch className="text-gray-500 group-hover:text-primary" />
                  </button>
                </form>
              </div>

              {/* Order Button */}
              <button
                onClick={handleCartClick}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Login & Sign Up Buttons */}
              {!isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setShowSignInPopup(true)} 
                    className="py-2 px-4 text-white bg-primary rounded-md"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setShowSignUpPopup(true)} 
                    className="py-2 px-4 text-white bg-primary rounded-md"
                  >
                    Sign up
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthenticated(false)} 
                  className="py-2 px-4 text-white bg-primary rounded-md"
                >
                  Logout
                </button>
              )}
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

      {/* Sign In Popup */}
      {showSignInPopup && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 w-96 relative">
            <IoCloseOutline
              onClick={() => setShowSignInPopup(false)}
              className="absolute right-3 top-3 text-2xl cursor-pointer"
            />
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form className="space-y-4" onSubmit={handleSignIn}>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-md hover:scale-105 duration-300"
              >
                Sign In
              </button>
              <div className="text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={switchToSignUp}
                    className="text-primary hover:underline"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Popup */}
      {showSignUpPopup && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 w-96 relative">
            <IoCloseOutline
              onClick={() => setShowSignUpPopup(false)}
              className="absolute right-3 top-3 text-2xl cursor-pointer"
            />
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              setIsAuthenticated(true);
              setShowSignUpPopup(false);
            }}>
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-md hover:scale-105 duration-300"
              >
                Sign Up
              </button>
              <div className="text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={switchToSignIn}
                    className="text-primary hover:underline"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
