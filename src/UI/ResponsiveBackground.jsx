import PropTypes from "prop-types";

import image1 from "../assets/desktop/image-header.jpg";
import image2 from "../assets/mobile/image-header.jpg";

const ResponsiveBackground = ({ children }) => {
  return (
    <>
      <div
        className="hidden md:flex flex-col fixed overflow-auto inset-0 px-10 py-5 text-white"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "100% auto",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </div>

      <div
        className="md:hidden flex flex-col fixed overflow-auto inset-0 text-white px-10 py-5"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </div>
    </>
  );
};

ResponsiveBackground.propTypes = {
  children: PropTypes.node.isRequired
}

export default ResponsiveBackground;
