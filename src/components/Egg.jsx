// import React from 'react'

import desktopImage from "../assets/desktop/image-transform.jpg"
import mobileImage from "../assets/mobile/image-transform.jpg"

const Egg = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="bg-white p-10 md:p-28 space-y-4 md:space-y-10"> 
        <h2 className="text-3xl md:text-[3rem] font-extrabold">Transform your <br className="hidden md:block"/>brand</h2>
        <p className="font-bold text-xl opacity-50">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button>
        Learn more
        </button>
      </div>
      {/* Egg Image */}
      <div>
      {/* for desktop */}
        <img className="hidden md:block w-[100%] h-[600px]" src={desktopImage}/>
        <img className=" md:hidden w-[100%]" src={mobileImage}/>
      </div>
    </div>
  );
};

export default Egg;
