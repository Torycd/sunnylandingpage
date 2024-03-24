import { FaBars } from "react-icons/fa";
import { useState } from "react";

import CreativeComp from "./CreativeComp";
import ResponsiveBackground from "../UI/ResponsiveBackground";

const FirstSection = () => {
  const [toggleButton, setToggleButton] = useState(false);
  function toogleMenu() {
    setToggleButton(!toggleButton);
  }
  return (
    <ResponsiveBackground>
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-extrabold self-center">sunnyside</h2>
        <div className="hidden md:flex justify-between gap-20 font-bold text-xl">
          <ul className="flex justify-between space-x-4 ">
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
          <FaBars onClick={toogleMenu} />
        </div>
      </div>
      <CreativeComp/>

      {/* menu for mobile */}

      <div
        className={
          !toggleButton
            ? "hidden"
            : "md:hidden font-bold absolute inset-x-0 w-full z-50 px-4 py-8 bg-white my-10 text-xl "
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
    </ResponsiveBackground>
  );
};

export default FirstSection;
