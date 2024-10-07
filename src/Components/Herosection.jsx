import React from "react";
import Navbar from "./HeroComponent/Navbar";
import backgroundImage from '../assets/images/Aarambh.jpg'; 

function Herosection() {
  return (
    <div>
      <Navbar></Navbar>
      {/* background */}
        <div className="w-full h-screen absolute top-0 " style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      </div>
      <div className="relative bg-transparent top-14 md:top-0 flex  justify-center items-center h-screen">
        <div className="MainHeading bg-transparent flex-col gap-6 text-white w-[600px] h-[400px] flex justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-Orbitron md:tracking-widest tracking-wide">
            AARAMBH
          </h1>
          <p className="font-Orbitron tracking-widest md:w-full w-[70%]">
            Embark on your journey of learning with Aarambh: Where curiosity
            meets Expertise!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
