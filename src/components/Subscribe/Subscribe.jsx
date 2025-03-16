import React, { useState } from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowConfirmation(true);
      setEmail(""); // Reset email input
      
      // Hide confirmation after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white relative"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <form onSubmit={handleSubmit} className="relative">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-primary text-white font-semibold hover:bg-primary/80 transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl z-50 animate-fade-in">
          <div className="text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Thank You!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have successfully subscribed to our newsletter.
            </p>
          </div>
        </div>
      )}

      {/* Overlay when confirmation is shown */}
      {showConfirmation && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-40" />
      )}
    </div>
  );
};

export default Subscribe;
