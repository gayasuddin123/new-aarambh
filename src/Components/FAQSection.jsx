import React from "react";
import FAQ from "./FAQComponents/FAQ";

function FAQSection() {
  return (
    <>
      <div className=" w-full absolute top-[729px] h-screen bg-black">
        <div className="w-full h-full bg-[url('./assets/images/Hero_bg.png')] opacity-45 bg-cover bg-center">
        </div>
      </div>
          <FAQ></FAQ>
    </>
  );
}

export default FAQSection;
