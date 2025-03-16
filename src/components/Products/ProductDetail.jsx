import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product } = state;

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity,
      totalPrice: product.price * quantity
    };
    
    navigate('/cart', { state: { cartItem } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="max-h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
          </div>

          <p className="text-2xl font-bold text-primary">
            ${product.price}
          </p>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Select Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? 'bg-primary text-white'
                      : 'hover:border-primary'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Select Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color
                      ? 'bg-primary text-white'
                      : 'hover:border-primary'
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="text-xl font-bold">
            Total: ${(product.price * quantity).toFixed(2)}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md hover:scale-105 duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 