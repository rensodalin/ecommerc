import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/women/women1.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg";
import Img6 from "../../assets/women/women6.jpg";
import Img7 from "../../assets/women/man1.jpg";
import Img8 from "../../assets/women/man2.jpg";
import Img9 from "../../assets/women/man3.jpg";
import Img10 from "../../assets/women/man4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Red",
    aosDelay: "0",
    price: 29.99,
    colors: ["Red", "Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "white",
    aosDelay: "200",
    price: 39.99,
    colors: ["White" , "Black" , "Red"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Blue",
    aosDelay: "400",
    price: 19.99,
    colors: ["Blue" , "Red" , "Black"],
    sizes: ["S" , "M" , "L" , "XL"],
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "pink",
    aosDelay: "600",
    price: 19.99,
    colors: ["Pink" , "Black" , "Red"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "dark-blue",
    aosDelay: "800",
    price: 24.99,
    colors: ["Dark Blue", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    img: Img6,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "dark-blue",
    aosDelay: "800",
    price: 24.99,
    colors: ["Dark Blue", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    img: Img7,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "dark-blue",
    aosDelay: "800",
    price: 24.99,
    colors: ["Dark Blue", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    img: Img8,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "dark-blue",
    aosDelay: "800",
    price: 24.99,
    colors: ["Dark Blue", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    img: Img9,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "dark-blue",
    aosDelay: "800",
    price: 24.99,
    colors: ["Dark Blue", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    img: Img10,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "dark-blue",
    aosDelay: "800",
    price: 24.99,
    colors: ["Dark Blue", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
  },
];

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover new arrival for you
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleProductClick(data)}
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <p className="text-primary font-semibold">${data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
