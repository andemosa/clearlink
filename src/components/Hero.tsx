import Button from "./Button";
import { BotIcon, StarIcon } from "./Icons";

const Hero = () => {
  return (
    <header className="flex flex-col lg:flex-row items-center  justify-between  gap-8 ">
      <main className="lg:w-4/6 flex flex-col gap-8 text-center lg:text-start">
        <h1 className="text-4xl lg:text-5xl font-bold text-grey-800">
          Uniting the world,
          <br />
          one video call at a time
        </h1>
        <p className="text-grey-500 max-w-md">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Button
            text="Start your free trial"
            className="text-white bg-clear-700 border border-clear-700 hover:text-clear-700 hover:bg-white"
          />
          <a className="flex items-center gap-4 text-clear-700">
            <span className="hover:scale-110">
              <BotIcon />
            </span>
            <span>Discover AI assistant</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 ">
          <img src="avatars.webp" alt="" />
          <div className="flex flex-col ">
            <div className="flex gap-1 items-center">
              {Array.from({ length: 5 }).map((_, idx) => (
                <StarIcon key={idx} />
              ))}
              5.0
            </div>
            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </main>
      <img src="/hero_image.webp" alt="" className="w-full lg:w-3/6" />
    </header>
  );
};

export default Hero;
