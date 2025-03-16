import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import pic1 from "../../../../assets/Products/pro1.jpg";
import pic2 from "../../../../assets/Products/pro2.jpg";
import pic3 from "../../../../assets/Products/pro3.jpg";
import pic4 from "../../../../assets/Products/pro4.jpg";
import pic5 from "../../../../assets/Products/pro5.jpg";
import pic6 from "../../../../assets/Products/pro6.jpg";
import pic7 from "../../../../assets/Products/pro7.jpg";
import pic8 from "../../../../assets/Products/pro8.jpg";
import pic9 from "../../../../assets/Products/pro9.jpg";
import pic10 from "../../../../assets/Products/pro10.jpg";
import pic11 from "../../../../assets/Products/pro11.jpg";
import pic12 from "../../../../assets/Products/pro12.jpg";
import pic13 from "../../../../assets/Products/pro13.jpg";
import pic14 from "../../../../assets/Products/pro14.jpg";
import pic15 from "../../../../assets/Products/pro15.jpg";
import pic16 from "../../../../assets/Products/pro16.jpg";
import pic17 from "../../../../assets/Products/pro17.jpg";
import pic18 from "../../../../assets/Products/pro18.jpg";

// Store images and prices
const imageMap = {
  pro1: pic1, pro2: pic2, pro3: pic3, pro4: pic4, pro5: pic5,
  pro6: pic6, pro7: pic7, pro8: pic8, pro9: pic9, pro10: pic10,
  pro11: pic11, pro12: pic12, pro13: pic13, pro14: pic14,
  pro15: pic15, pro16: pic16, pro17: pic17, pro18: pic18
};

const prices = {
  pro1: "$20", pro2: "$25", pro3: "$30", pro4: "$22",
  pro5: "$18", pro6: "$40", pro7: "$15", pro8: "$50",
  pro9: "$35", pro10: "$45", pro11: "$27", pro12: "$32",
  pro13: "$29", pro14: "$38", pro15: "$42", pro16: "$48",
  pro17: "$52", pro18: "$58"
};

// Product list
const imageItems = [
  { src: "pro1", alt: "Long Sleeve Shirt" }, { src: "pro2", alt: "Casual T-Shirt" },
  { src: "pro3", alt: "Hoodie" }, { src: "pro4", alt: "Denim Jacket" },
  { src: "pro5", alt: "Formal Shirt" }, { src: "pro6", alt: "Leather Jacket" },
  { src: "pro7", alt: "Sweater" }, { src: "pro8", alt: "Winter Coat" },
  { src: "pro9", alt: "Polo Shirt" }, { src: "pro10", alt: "Track Jacket" },
  { src: "pro11", alt: "Blazer" }, { src: "pro12", alt: "Tank Top" },
  { src: "pro13", alt: "Cardigan" }, { src: "pro14", alt: "Windbreaker" },
  { src: "pro15", alt: "Fleece Jacket" }, { src: "pro16", alt: "Down Jacket" },
  { src: "pro17", alt: "Parka" }, { src: "pro18", alt: "Pea Coat" }
];

const WomenProductsData = [
  {
    id: 1,
    img: pic1,
    title: "Long Sleeve Shirt",
    rating: 4.5,
    color: "White",
    aosDelay: "0",
    price: 20,
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    img: pic2,
    title: "Casual T-Shirt",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    img: pic3,
    title: "Hoodie",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    img: pic4,
    title: "Denim Jacket",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    img: pic5,
    title: "Formal Shirt",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    img: pic6,
    title: "Leather Jacket",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    img: pic7,
    title: "Sweater",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    img: pic8,
    title: "Winter Coat",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    img: pic9,
    title: "Polo Shirt",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    img: pic10,
    title: "Track Jacket",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 11,
    img: pic11,
    title: "Blazer",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    img: pic12,
    title: "Tank Top",
    rating: 4.5,
    color: "Black", 
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 13,
    img: pic13,
    title: "Cardigan",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 14,
    img: pic14,
    title: "Windbreaker",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    img: pic15,
    title: "Fleece Jacket",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,  
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 16,
    img: pic16,
    title: "Down Jacket",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"], 
  },
  {
    id: 17,
    img: pic17,
    title: "Parka",
    rating: 4.5,  
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  { 
    id: 18,
    img: pic18,
    title: "Pea Coat",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },

    
  // ... Add similar objects for other products ...
];

const Main = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header Title */}
      <h3 className="text-2xl font-bold text-center mb-6 mt-20 text-yellow-400">
        ALL PRICES INCLUDE IMPORTANT COSTS
      </h3>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {WomenProductsData.map((data) => (
          <div 
            key={data.id} 
            className="relative group cursor-pointer"
            onClick={() => handleProductClick(data)}
          >
            {/* Image */}
            <img
              src={data.img}
              alt={data.title}
              className="w-full h-auto object-cover rounded-md cursor-pointer"
              loading="lazy"
            />

            {/* Overlay text */}
            <p className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-white font-medium opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              {data.title}
            </p>

            {/* Product Name and Price */}
            <div className="mt-2 text-center">
              <p className="font-medium text-lg">{data.title}</p>
              <p className="text-lg font-semibold text-gray-800">${data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
