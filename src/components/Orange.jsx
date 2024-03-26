import desktopHeader1 from "../assets/desktop/image-graphic-design.jpg";
import smallHeader1 from "../assets/mobile/image-graphic-design.jpg";

import desktopHeader2 from "../assets/desktop/image-photography.jpg";
import smallHeader2 from "../assets/mobile/image-photography.jpg";

const Orange = () => {
  return (
    <div className="flex flex-col md:flex-row font-New2 ">
      {/* two weird Fruit  */}
      <div
        className={`text-center px-10 md:w-[50%] space-y-4 md:space-y-12 md:px-20 py-5 text-black ${
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
      >
        <h2 className="text-3xl md:text-[3rem] pt-80 font-extrabold">Graphic design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients attention.
        </p>
      </div>
      {/* Orange */}
      <div
        className={`px-10 text-center md:w-[50%] space-y-4 md:space-y-12 md:px-20 py-5 text-black ${
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
      >
        <h2 className="text-3xl md:text-[3rem] pt-80 font-extrabold">Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Orange;
