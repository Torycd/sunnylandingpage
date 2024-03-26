import { DUMMY_ITEM } from "../assets/Testimony.js";

const Testimonial = () => {
  return (
    <div className="px-2 md:px-12 font-New">
      <h2 className="text-center font-extrabold text-4xl opacity-70 my-10">
        Client testimonials
      </h2>
      <div className="grid gap-5 md:grid-cols-3 md:gap-0">
        {DUMMY_ITEM.map((itm) => (
          <div key={itm.name} className="space-y-4">
            <img src={itm.img} className="rounded-full mx-auto" />
            <p key={itm.name} className="text-center opacity-80">
              {itm.content}
            </p>
            <h2 className="font-bold text-center">{itm.name}</h2>
            <p className="text-center opacity-80">{itm.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
