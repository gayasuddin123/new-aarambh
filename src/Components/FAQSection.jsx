import React from "react";
import FAQ from "./FAQComponents/FAQ";
import backgroundImage from '../assets/images/Aarambh.jpg'; 

function FAQSection() {
  return (
    <>
      
        <div className="w-full h-full   bg-cover bg-center"  style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
          <FAQ></FAQ>
        </div>
    </>
  );
}

export default FAQSection;
