import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from '../assets/images/Aarambh.jpg'; 

function Domainsection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className="min-h-screen flex  flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <div className="w-[90%]  max-w-5xl h-14  py-5 px-4 md:px-8 flex justify-between items-center bg-gradient-to-r from-[#6AE58959] to-[#20507259]  rounded-[40px] mb-10 relative">
        <div className="text-lg md:text-xl font-semibold">Hackathon : (web dev)</div>
        <div className="text-lg md:text-2xl">26:15:23</div>
      </div>

      {/* Main Content */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Explore Domains</h1>
      </div>
      {/* main div */}
      <div className="w-[80%] max-w-7xl  h-[300px] flex items-center justify-center bg-gradient-to-r from-[#6AE58959] to-[#20507259]  rounded-[40px]"> 

      {/* Slider */}
      <div className="w-[90%] max-w-4xl  ">
        <Slider {...settings}>
          {/* Card with Gradient and Layered Card Below */}


          <div className="relative">

          {/* <div className="relative card w-32 sm:w-36 md:w-40 lg:w-48 h-64 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg mx-auto"></div> */}


            <div className="w-48 h-64 bg-gradient-to-r from-blue-500 to-blue-300 rounded-[40px] shadow-lg mx-auto relative z-10"></div>
            {/* <div className="w-52 h-72 bg-blue-700/50 rounded-2xl shadow-lg absolute top-4 left-7 z-0"></div> */}
          </div>
          <div className="relative">

          {/* <div className="relative card w-32 sm:w-36 md:w-40 lg:w-48 h-64 bg-gradient-to-r from-green-500 to-green-300 rounded-lg shadow-lg mx-auto"></div> */}


            <div className="w-48 h-64 bg-gradient-to-r from-green-500 to-green-300 rounded-[40px] shadow-lg mx-auto relative z-10"></div>
            {/* <div className="w-52 h-72 bg-green-700/50 rounded-lg shadow-2xl absolute top-4 left-7 z-0"></div> */}
          </div>
          <div className="relative">

          {/* <div className="relative card w-32 sm:w-36 md:w-40 lg:w-48 h-64 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-lg shadow-lg mx-auto"></div> */}


            <div className="w-48 h-64 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[40px] shadow-lg mx-auto relative z-10"></div>
            {/* <div className="w-52 h-72 bg-yellow-700/50 rounded-lg shadow-2xl absolute top-4 left-7 z-0"></div> */}
          </div>
          <div className="relative">

          {/* <div className="relative card w-32 sm:w-36 md:w-40 lg:w-48 h-64 bg-gradient-to-r from-red-500 to-red-300 rounded-lg shadow-lg mx-auto"></div> */}


            <div className="w-48 h-64 bg-gradient-to-r from-red-500 to-red-300 rounded-[40px] shadow-lg mx-auto relative z-10"></div>
            {/* <div className="w-52 h-72 bg-red-700/50 rounded-lg shadow-2xl absolute top-4 left-7 z-0"></div> */}
          </div>
          <div className="relative">

          {/* <div className="relative card w-32 sm:w-36 md:w-40 lg:w-48 h-64 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg shadow-lg mx-auto"></div> */}


            <div className="w-48 h-64 bg-gradient-to-r from-purple-500 to-purple-300 rounded-[40px] shadow-lg mx-auto relative z-10"></div>
            {/* <div className="w-52 h-72 bg-purple-700/50 rounded-2xl shadow-lg absolute top-4 left-7 z-0"></div> */}
          </div>
          <div className="relative">

          {/* <div className="relative card w-32 sm:w-36 md:w-40 lg:w-48 h-64 bg-gradient-to-r from-pink-500 to-pink-300 rounded-lg shadow-lg mx-auto"></div> */}


            <div className="w-48 h-64 bg-gradient-to-r from-pink-500 to-pink-300 rounded-[40px] shadow-lg mx-auto relative z-10"></div>
            {/* <div className="w-52 h-72 bg-pink-700/50 rounded-2xl shadow-lg absolute top-4 left-7 z-0"></div> */}
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
}

export default Domainsection;














