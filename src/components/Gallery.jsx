// desktop image
import coneD from "../assets/desktop/image-gallery-cone.jpg";
import orangeD from "../assets/desktop/image-gallery-orange.jpg";
import milkD from "../assets/desktop/image-gallery-milkbottles.jpg";
import sugarD from "../assets/desktop/image-gallery-sugarcubes.jpg";

// mobile image
import coneM from "../assets/mobile/image-gallery-cone.jpg";
import orangeM from "../assets/mobile/image-gallery-orange.jpg";
import milkM from "../assets/mobile/image-gallery-milkbottles.jpg";
import sugarM from "../assets/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
      <div className="">
        <img className="hidden md:block" src={milkD} />
        <img className=" md:hidden" src={milkM} />
      </div>
      <div className="">
        <img className="hidden md:block" src={orangeD} />
        <img className=" md:hidden" src={orangeM} />
      </div>
      <div className="">
        <img className="hidden md:block" src={coneD} />
        <img className=" md:hidden" src={coneM} />
      </div>
      <div className="">
        <img className="hidden md:block" src={sugarD} />
        <img className=" md:hidden" src={sugarM} />
      </div>
    </div>
  );
};

export default Gallery;
