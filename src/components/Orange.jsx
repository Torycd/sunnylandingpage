import desktopHeader1 from "../assets/desktop/image-graphic-design.jpg";
import smallHeader1 from "../assets/mobile/image-graphic-design.jpg";

import desktopHeader2 from "../assets/desktop/image-photography.jpg";
import smallHeader2 from "../assets/mobile/image-photography.jpg";

const Orange = () => {
  return (
    <div className="flex flex-col md:flex-row font-New2">
      <div
        className={`px-10 md:w-[50%] md:px-20 py-5 text-white ${
          window.innerWidth >= 375 ? "md:flex flex-col" : ""
        }`}
        style={{
          backgroundImage: `url(${
            window.innerWidth < 375 ? smallHeader1 : desktopHeader1
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px", // Set your desired height
          width: "100%", // Set your desired width
        }}
      ></div>
      <div
        className={`px-10 md:w-[50%] md:px-20 py-5 text-white ${
          window.innerWidth >= 375 ? "md:flex flex-col" : ""
        }`}
        style={{
          backgroundImage: `url(${
            window.innerWidth < 375 ? smallHeader2 : desktopHeader2
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px", // Set your desired height
          width: "100%", // Set your desired width
        }}
      ></div>
    </div>
  );
};

export default Orange;
