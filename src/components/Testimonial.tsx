import { useEffect, useState } from "react";

import { LeftArrowIcon, RightArrowIcon } from "./Icons";
import { AutomatticIcon, IntercomIcon, ShopifyIcon } from "./Logos";

const slides = [
  {
    id: 1,
    icon: <ShopifyIcon />,
    testimony:
      "ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and \n\n top-notch security make it essential for our team.",
    avatar: "/avatar.webp",
    name: "Sarah Thompson",
    role: "Project Manager, Shopify",
  },
  {
    id: 2,
    icon: <IntercomIcon />,
    testimony:
      "ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and \n\n top-notch security make it essential for our team.",
    avatar: "/avatar.webp",
    name: "Alexander Mitchell",
    role: "Head of growth, Intercom",
  },
  {
    id: 3,
    icon: <AutomatticIcon />,
    testimony:
      "ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and \n\n top-notch security make it essential for our team.",
    avatar: "/avatar.webp",
    name: "Olivia Foster",
    role: "Project Manager, Automattic",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlides = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-grey-50 my-8 md:my-12 lg:my-16">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center container py-8 gap-10 xl:gap-40">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex items-center h-12">
            {slides[currentSlide].icon}
          </div>
          <span className="text-[#FDB022] text-xl">★★★★★</span>
          <h1 className="text-2xl md:text-3xl font-semibold text-grey-900 xl:text-4xl ">
            {slides[currentSlide].testimony}
          </h1>
          <div className="flex gap-8 sm:justify-between sm:items-center flex-col sm:flex-row">
            <div className="flex items-center gap-4">
              <img src={slides[currentSlide].avatar} alt="" />
              <div className="flex flex-col ">
                <h4 className="text-grey-900 font-semibold text-lg">
                  {slides[currentSlide].name}
                </h4>
                <p className="text-grey-600">{slides[currentSlide].role}</p>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <LeftArrowIcon
                className="cursor-pointer"
                onClick={handleSlides}
              />

              <RightArrowIcon
                onClick={handleSlides}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <img
          src="/testimonials_image.webp"
          alt=""
          className="hidden lg:block object-contain h-[400px] lg:w-1/2"
        />
      </div>
    </section>
  );
};

export default Testimonial;
