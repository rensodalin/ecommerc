import React from 'react';
import aboutImage1 from '../../../../assets/About/about1.jpg';
import aboutImage2 from '../../../../assets/About/about2.jpg';
import aboutImage3 from '../../../../assets/About/about3.jpg';

const Hero = () => {
  return (
    <div className="bg-gray-200 w-screen p-8 sm:p-16 dark:bg-gray-900">
      <div className="p-4 mb-4 text-lg text-center leading-tight first-letter:capitalize font-medium dark:text-gray-100">
        <h3>hover through the cards to see magic 22</h3>
      </div>
      <div className="mx-auto w-fit grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
          <img
            className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
            src={aboutImage1}
            alt="About Image 1"
          />
          <div className="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
            <div className="p-6">
              <div className="capitalize flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-red-600 text-lg font-bold">Jordan Spizike Low</h2>
                  <p className="dark:text-gray-100">Men's Shoes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold dark:text-gray-100">$160</p>
                </div>
              </div>
              <div className="block mt-4">
                <div className="absolute bottom-2 left-5">
                  <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
          <img
            className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
            src={aboutImage2}
            alt="About Image 2"
          />
          <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
            <div className="p-6">
              <div className="capitalize flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-red-600 text-lg font-bold">Air Jordan 6 Retro</h2>
                  <p className="dark:text-gray-100">Men's Shoes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold dark:text-gray-100">$200</p>
                </div>
              </div>
              <div className="block mt-4">
                <div className="absolute bottom-2 left-5">
                  <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
          <img
            className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
            src={aboutImage3}
            alt="About Image 3"
          />
          <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
            <div className="p-6">
              <div className="capitalize flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-red-600 text-lg font-bold">Jumpman MVP</h2>
                  <p className="dark:text-gray-100">Men's Shoes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold dark:text-gray-100">$165</p>
                </div>
              </div>
              <div className="block mt-4">
                <div className="absolute bottom-2 left-5">
                  <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
