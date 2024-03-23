import { FaBars } from "react-icons/fa";
import { useState } from "react";

const FirstSection = () => {
  const [toggleButton, setToggleButton] = useState(false);
  function toogleMenu() {
    setToggleButton(!toggleButton);
  }
  return (
    <div className="w-screen bg-blue-600 text-white px-10 py-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-extrabold self-center">sunnyside</h2>
        <div className="hidden md:flex justify-between gap-20 font-bold text-[16px]">
          <ul className="flex justify-between space-x-4 ">
            <li className="self-center">About</li>
            <li className="self-center">Services</li>
            <li className="self-center">Projects</li>
          </ul>
          <div className="bg-white text-black rounded-full px-6 py-3">
            Button
          </div>
        </div>
        {/* toggler button */}
        <div className="flex md:hidden items-center">
          <FaBars className="" onClick={toogleMenu} />
        </div>
      </div>

      {/* menu for mobile */}
      {toggleButton && (
        <div className="md:hidden absolute z-50 bg-white my-10 ">
          <ul className="flex-col space-y-4 text-black text-center mb-10">
            <li className="self-center">About</li>
            <li className="self-center">Services</li>
            <li className="self-center">Projects</li>
          </ul>
          <div className="bg-red-700 text-white rounded-full px-6 py-3 w-auto justify-center">
            Button
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstSection;
