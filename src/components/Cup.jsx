import desktopImage from "../assets/desktop/image-stand-out.jpg";
import mobileImage from "../assets/mobile/image-stand-out.jpg";

const Cup = () => {
  return (
    <div className="flex flex-col md:flex-row font-New2">
      <div className="md:w-[50%]">
        {/* for desktop */}
        <img
          className="hidden md:block w-[100%] h-[500px]"
          src={desktopImage}
        />
        {/* for mobile */}
        <img className=" md:hidden w-[100%]" src={mobileImage} />
      </div>
      <div className="bg-white p-10 md:w-[50%] md:p-16 space-y-4 md:space-y-12">
        <div className="text-center md:text-left text-3xl md:text-[3rem] font-extrabold space-y-4">
          <h2>Stand out to the right</h2>
          <h2>audience</h2>
        </div>
        <p className="font-bold text-xl opacity-50 text-center md:text-left">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, well build and extend
          your brand in digital places.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="font-bold text-xl underline decoration-[#f94d4d]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cup;
