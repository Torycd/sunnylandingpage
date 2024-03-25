import { useState } from "react";

import smallHeader from "../assets/mobile/image-header.jpg"
import desktopHeader from "../assets/desktop/image-header.jpg"

import CreativeComp from "./CreativeComp";


const FirstSection = () => {
  const [toggleButton, setToggleButton] = useState(false);
  function toogleMenu() {
    setToggleButton(!toggleButton);
  }
  return (
    <div
      className={`px-10 md:px-20 py-5 text-white ${window.innerWidth >= 375 ? 'md:flex flex-col' : ''}`}
      style={{
        backgroundImage: `url(${window.innerWidth < 375 ? smallHeader : desktopHeader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px', // Set your desired height
        width: '100%', // Set your desired width
      }}
    >
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-extrabold self-center">sunnyside</h2>
        <div className="hidden md:flex justify-between gap-20 font-bold text-xl">
          <ul className="flex justify-between space-x-4 opacity-90">
            <li className="self-center">About</li>
            <li className="self-center">Services</li>
            <li className="self-center">Projects</li>
          </ul>
          <div className="">
          <button className="bg-white text-black rounded-full px-6 py-3">
          Button
          </button>
            
          </div>
        </div>
        {/* toggler button */}
        <div className="flex md:hidden items-center">
          <span onClick={toogleMenu} >
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd"/></svg>
          </span>
          
        </div>
      </div>
      {/* menu for mobile */}
      <div
        className={
          !toggleButton
            ? "hidden"
            : "md:hidden absolute font-bold  inset-x-0 w-full z-50 px-4 py-8 bg-white my-10 text-xl "
        }
      >
        <ul className="flex-col space-y-8 text-black text-center mb-10 opacity-50">
          <li className="self-center">About</li>
          <li className="self-center">Services</li>
          <li className="self-center">Projects</li>
        </ul>
        <div className="flex justify-center">
          <button className="w-auto  bg-[#ffd700] text-black rounded-full px-6 py-3 ">
            contact
          </button>
        </div>
      </div>
      <CreativeComp/>
    </div>
    
  );
};

export default FirstSection;
