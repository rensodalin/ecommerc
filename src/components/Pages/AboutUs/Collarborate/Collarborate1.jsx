import React from 'react';
import Slider from "react-slick";
import teamMember1 from '../../../../assets/About/collar2.jpg';
import teamMember2 from '../../../../assets/About/collar3.jpg';
import teamMember3 from '../../../../assets/About/collar4.jpg';
import teamMember4 from '../../../../assets/About/collar5.jpg';

// Team Member Data
const teamMembers = [
  { id: 1, name: "John Doe", role: "Software Engineer", img: teamMember1 },
  { id: 2, name: "Jane Smith", role: "Graphic Designer", img: teamMember2 },
  { id: 3, name: "Alex Johnson", role: "Marketing Manager", img: teamMember3 },
  { id: 4, name: "Peter Johnson", role: "SEO Specialist", img: teamMember4 },
];

const Collarborate = () => {
  // Slider Settings
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 items visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablets
      { breakpoint: 768, settings: { slidesToShow: 1 } },  // Mobile
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">The Founders</h2>
        
        {/* Slider for Team Members */}
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collarborate;
