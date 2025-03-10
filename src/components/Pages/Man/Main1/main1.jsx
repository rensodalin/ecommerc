import React from "react";

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
  "pro36": pic1,
  "pro19": pic2,
  "pro20": pic3,
  "pro21": pic4,
  "pro22": pic5,
  "pro23": pic6,
  "pro24": pic7,
  "pro25": pic8,
  "pro26": pic9,
  "pro27": pic10,
  "pro28": pic11,
  "pro29": pic12,
  "pro30": pic13,
  "pro31": pic14,
  "pro32": pic15,
  "pro33": pic16,
  "pro34": pic17,
  "pro35": pic18
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
  "pro35": "$58"
};

const Main = () => {
  // Make sure the src keys match the ones in imageMap
  const imageItems = [
    { src: "pro36", alt: "Long Sleeve Shirt" },
    { src: "pro19", alt: "Casual T-Shirt" },
    { src: "pro20", alt: "Hoodie" },
    { src: "pro21", alt: "Denim Jacket" },
    { src: "pro22", alt: "Formal Shirt" },
    { src: "pro23", alt: "Leather Jacket" },
    { src: "pro24", alt: "Sweater" },
    { src: "pro25", alt: "Winter Coat" },
    { src: "pro26", alt: "Polo Shirt" },
    { src: "pro27", alt: "Track Jacket" },
    { src: "pro28", alt: "Blazer" },
    { src: "pro29", alt: "Tank Top" },
    { src: "pro30", alt: "Cardigan" },
    { src: "pro31", alt: "Windbreaker" },
    { src: "pro32", alt: "Fleece Jacket" },
    { src: "pro33", alt: "Down Jacket" },
    { src: "pro34", alt: "Parka" },
    { src: "pro35", alt: "Pea Coat" }

  ];

  return (
    <div className="container mx-auto px-4">
      {/* Header Title */}
      <h3 className="text-2xl font-bold text-center mb-6 mt-20 text-yellow-400">
        ALL PRICES INCLUDE IMPORTANT COSTS
      </h3>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {imageItems.map((item, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={imageMap[item.src]} // Get image from the map
              alt={item.alt}
              className="w-full h-auto object-cover rounded-md"
              loading="lazy" // Lazy loading images
            />

            {/* Overlay text */}
            <p className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-white font-medium opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              {item.alt}
            </p>

            {/* Product Name and Price */}
            <div className="mt-2 text-center">
              <p className="font-medium text-lg">{item.alt}</p>
              <p className="text-lg font-semibold text-gray-800">{prices[item.src]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
