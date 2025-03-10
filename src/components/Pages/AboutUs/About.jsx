import React, { useState } from "react";
import Banner from "./Banner/Banner1";
import Hero from "./Hero/Hero1";
import Collarborate from "./Collarborate/Collarborate1";
import Testimonials from "../../Testimonials/Testimonials";
import Footer from "../../Footer/Footer";
import Popup from "../../Popup/Popup"; // Ensure Popup component exists

const About = () => {
  // ✅ Define state for the popup
  const [orderPopup, setOrderPopup] = useState(false);

  // ✅ Function to toggle order popup
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Banner />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Collarborate/>
      <Testimonials />
      <Footer />
      {/* ✅ Ensure Popup component exists */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default About;
