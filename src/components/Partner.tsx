import {
  AutomatticIcon,
  CoinbaseIcon,
  DropboxIcon,
  IntercomIcon,
  MarvelIcon,
  ShopifyIcon,
} from "./Logos";

const images = [
  {
    id: 1,
    icon: <ShopifyIcon />,
  },
  {
    id: 2,
    icon: <CoinbaseIcon />,
  },
  {
    id: 3,
    icon: <DropboxIcon />,
  },
  {
    id: 4,
    icon: <IntercomIcon />,
  },
  {
    id: 5,
    icon: <MarvelIcon />,
  },
  {
    id: 6,
    icon: <AutomatticIcon />,
  },
];

const Partner = () => {
  return (
    <div className="w-[90%] mx-auto my-8 md:my-12 lg:my-20">
      <p className="text-grey-600 text-center md:text-xl font-semibold">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="mb-8 overflow-x-hidden relative flex">
        <div className="py-12 animate-marquee whitespace-nowrap flex gap-3">
          {images.map(({ id, icon }) => (
            <div key={id} className="mx-8 flex items-center justify-center">
              {icon}
            </div>
          ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex gap-3">
          {images.map(({ id, icon }) => (
            <div key={id} className="mx-8 flex items-center justify-center">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
