import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import About from "./components/Pages/AboutUs/About"; // Import About page
import Contact from "./components/Pages/Contact/Contact"; 
import Women from "./components/Pages/Women/Women";
import Man from "./components/Pages/Man/Man"; // Changed 'Man' to lowercase for consistency
import AOS from "aos";
import "aos/dist/aos.css";
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ProductDetail from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);  // Removed AOS.refresh() as it is generally not needed.

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated} 
          handleOrderPopup={handleOrderPopup} 
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products isAuthenticated={isAuthenticated} />
                <Subscribe />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/women" element={<Women />} />
          <Route path="/man" element={<Man />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
