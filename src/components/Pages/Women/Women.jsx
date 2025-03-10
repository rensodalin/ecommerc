import React from 'react';
import Main1 from './Main/main';  // Importing the correct component
import Footer from "../../Footer/Footer";

const Women = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Main1 />  {/* Corrected component name */}
      <Footer />
    </div>
  );
};

export default Women;
