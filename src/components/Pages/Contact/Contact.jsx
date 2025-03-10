import React, { useState } from "react";
import Banner from "./Banner/Banner2";
import Hero from "./Hero/Hero2";
import Footer from "../../Footer/Footer";
import Popup from "../../Popup/Popup"; // Ensure Popup component exists

const Contact = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Banner />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Contact;
