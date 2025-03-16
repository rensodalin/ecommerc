import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItem } = state;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    
    // Hide confirmation after 3 seconds and redirect to home
    setTimeout(() => {
      setShowConfirmation(false);
      navigate('/');
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Payment Details</h1>
          <p className="text-gray-600">Complete your purchase</p>
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Product:</span>
            <span>{cartItem.title}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Quantity:</span>
            <span>{cartItem.quantity}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount:</span>
            <span>${cartItem.totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              className={`p-4 border rounded-lg flex items-center justify-center gap-2 ${
                paymentMethod === 'card' ? 'border-primary bg-primary/10' : ''
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <span className="material-icons">credit_card</span>
              Credit Card
            </button>
            <button
              className={`p-4 border rounded-lg flex items-center justify-center gap-2 ${
                paymentMethod === 'paypal' ? 'border-primary bg-primary/10' : ''
              }`}
              onClick={() => setPaymentMethod('paypal')}
            >
              <span className="material-icons">account_balance_wallet</span>
              PayPal
            </button>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  maxLength="16"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Card Holder Name</label>
                <input
                  type="text"
                  name="cardHolder"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    maxLength="5"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    maxLength="3"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:scale-105 duration-300"
              >
                Pay ${cartItem.totalPrice.toFixed(2)}
              </button>
            </form>
          )}

          {/* PayPal Payment Form */}
          {paymentMethod === 'paypal' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">PayPal Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:scale-105 duration-300"
              >
                Pay with PayPal
              </button>
            </form>
          )}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="w-full py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
        >
          Back to Cart
        </button>
      </div>

      {/* Payment Confirmation Popup */}
      {showConfirmation && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl z-50 text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for your purchase.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Redirecting to home page...
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment; 