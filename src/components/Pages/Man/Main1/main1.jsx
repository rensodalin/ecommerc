import React from "react";
import { useNavigate } from "react-router-dom";

// Import local images
import pic1 from '../../../../assets/Products/pro19.jpg';
import pic2 from '../../../../assets/Products/pro20.jpg';
import pic3 from '../../../../assets/Products/pro21.jpg';
import pic4 from '../../../../assets/Products/pro22.jpg';
import pic5 from '../../../../assets/Products/pro23.jpg';
import pic6 from '../../../../assets/Products/pro24.jpg';
import pic7 from '../../../../assets/Products/pro25.jpg';
import pic8 from '../../../../assets/Products/pro26.jpg';
import pic9 from '../../../../assets/Products/pro27.jpg';
import pic10 from '../../../../assets/Products/pro28.jpg';
import pic11 from '../../../../assets/Products/pro29.jpg';
import pic12 from '../../../../assets/Products/pro30.jpg';
import pic13 from '../../../../assets/Products/pro31.jpg';
import pic14 from '../../../../assets/Products/pro32.jpg';
import pic15 from '../../../../assets/Products/pro33.jpg';
import pic16 from '../../../../assets/Products/pro34.jpg';
import pic17 from '../../../../assets/Products/pro35.jpg';
import pic18 from '../../../../assets/Products/pro36.jpg';


// Store images in an object with correct keys
const imageMap = {
  "pro19": pic1,
  "pro20": pic2,
  "pro21": pic3,
  "pro22": pic4,
  "pro23": pic5,
  "pro24": pic6,
  "pro25": pic7,
  "pro26": pic8,
  "pro27": pic9,
  "pro28": pic10,
  "pro29": pic11,
  "pro30": pic12,
  "pro31": pic13,
  "pro32": pic14,
  "pro33": pic15,
  "pro34": pic16,
  "pro35": pic17,
  "pro36": pic18,
  "pro36": pic16
};

// Example prices for each product
const prices = {
  "pro36": "$20",
  "pro19": "$25",
  "pro20": "$30",
  "pro21": "$22",
  "pro22": "$18",
  "pro23": "$40",
  "pro24": "$15",
  "pro25": "$50",
  "pro26": "$35",
  "pro27": "$45",
  "pro28": "$27",
  "pro29": "$32",
  "pro30": "$29",
  "pro31": "$38",
  "pro32": "$42",
  "pro33": "$48",
  "pro34": "$52",
  "pro35": "$58",
  "pro36": "$62"
};

const MenProductsData = [
  {
    id: 19,
    img: pic2,
    title: "Casual T-Shirt",
    rating: 4.5,
    color: "Black",
    aosDelay: "0",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 20,
    img: pic3,
    title: "Hoodie",
    rating: 4.5,
    color: "Gray",
    aosDelay: "200",
    price: 30,
    colors: ["Gray", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 21,
    img: pic4,
    title: "Denim Jacket",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 22,
    colors: ["Black", "Blue", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
    img: pic18,
    title: "Pea Coat",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 36,
    img: pic16,
    title: "Down Jacket",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    price: 25,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
  },

  
  // ... Add similar objects for all other products
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
        {MenProductsData.map((data) => (
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
