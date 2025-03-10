import React from "react";
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

const Main = ({ addToCart }) => {
  return (
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-bold text-center mb-6 mt-20 text-yellow-400">
        ALL PRICES INCLUDE IMPORTANT COSTS
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {imageItems.map((item, index) => (
          <div key={index} className="relative group">
            <img
              src={imageMap[item.src]} // Use the image source from the map
              alt={item.alt}
              className="w-full h-auto object-cover rounded-md cursor-pointer"
              loading="lazy"
              onClick={() => addToCart(item)} // Trigger add to cart when clicked
            />
            <p className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-white font-medium opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              {item.alt}
            </p>
            <div className="mt-2 text-center">
              <p className="font-medium text-lg">{item.alt}</p>
              <p className="text-lg font-semibold text-gray-800">{prices[item.src]}</p> {/* Fetch price from the prices map */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
