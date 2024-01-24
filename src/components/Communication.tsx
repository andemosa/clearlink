import Button from "./Button";
import { CheckIcon } from "./Icons";

const features = [
  "30 days free trial",
  "Cancel at any time",
  "Access to all features",
  "Peronalized onboarding",
];

const Communication = () => {
  return (
    <section className="w-[95%] ml-auto flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-20 justify-between my-10 md:my-16 lg:my-24 xl:my-28">
      <div className="md:w-[90%] mx-auto lg:mx-0 lg:w-1/2 py-4 lg:py-6 xl:pr-4">
        <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-semibold  mb-6">
          Ready to clear the path to perfect communication?
        </h1>
        <ul className="flex gap-6 flex-col">
          {features.map((item) => (
            <li className="flex gap-3 items-center" key={item}>
              <span className="hover:scale-110">
                <CheckIcon />
              </span>
              <span className="text-grey-600 text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex  flex-wrap sm:items-center gap-4 mt-8 ">
          <Button
            text="Talk to sales"
            className="text-grey-900 bg-white border border-grey-400 w-full hover:text-white hover:bg-grey-900 hover:border-grey-900"
          />
          <Button
            text="Start your free trial"
            className="text-white bg-clear-700 border border-clear-700 hover:text-clear-700 hover:bg-white"
          />
        </div>
      </div>
      <img
        src="/ready_image.webp"
        alt=""
        className="lg:w-1/2 max-h-[550px] object-contain"
      />
    </section>
  );
};

export default Communication;
