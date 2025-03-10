import React from 'react'
import aboutImage from '../../../../assets/Contact/contact1.jpg';
const Banner2 = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutImage})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto">
      <h1 className="pb-4">Contact US</h1>
      <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
        <div className="relative z-30 text-base text-black">
          <div className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
