import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";

const Cart = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItem } = state;

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { cartItem } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Order Summary</h1>
          <p className="text-gray-600">Review your order before proceeding to payment</p>
        </div>

        {/* Order Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Product Image */}
            <div className="w-full md:w-1/3">
              <img
                src={cartItem.img}
                alt={cartItem.title}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-2/3 space-y-4">
              <h2 className="text-2xl font-bold">{cartItem.title}</h2>
              
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{cartItem.rating}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Selected Size:</p>
                  <p className="font-semibold">{cartItem.selectedSize}</p>
                </div>
                <div>
                  <p className="text-gray-600">Selected Color:</p>
                  <p className="font-semibold">{cartItem.selectedColor}</p>
                </div>
                <div>
                  <p className="text-gray-600">Quantity:</p>
                  <p className="font-semibold">{cartItem.quantity}</p>
                </div>
                <div>
                  <p className="text-gray-600">Price per item:</p>
                  <p className="font-semibold">${cartItem.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Price Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Price ({cartItem.quantity} items)</span>
              <span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Charges</span>
              <span className="text-green-500">Free</span>
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>${cartItem.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-3 px-4 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Continue Shopping
          </button>
          <button
            onClick={handleProceedToPayment}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:scale-105 duration-300"
          >
            Proceed to Payment
          </button>
        </div>

        {/* Order ID */}
        <div className="text-center mt-6 text-gray-600">
          Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Cart; 