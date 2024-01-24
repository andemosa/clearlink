import { CrystalIcon, NoiseIcon, SchedulingIcon, SecurityIcon } from "./Icons";

const advantages = [
  {
    id: 1,
    icon: <CrystalIcon />,
    title: "Crystal-clear HD video",
    desc: "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
  },
  {
    id: 2,
    icon: <NoiseIcon />,
    title: "Noise-canceling audio",
    desc: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    id: 3,
    icon: <SchedulingIcon />,
    title: "Scheduling made easy",
    desc: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    id: 4,
    icon: <SecurityIcon />,
    title: "Bank-grade security",
    desc: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

const Choose = () => {
  return (
    <section className="w-[90%] mx-auto my-6 md:my-10 lg:my-12">
      <div className="flex flex-col lg:flex-row justify-between gap-20 mt-16 lg:mt-12">
        <div className="lg:w-1/2 flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-clear-700">
              The ClearLink Advantage
            </span>
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-grey-800">
              Why choose ClearLink?
            </h2>
            <p className="text-grey-500  max-w-lg">
              In a world where connection is everything, ClearLink takes the
              lead. Our cutting-edge video conferencing app offers:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-14">
            {advantages.map(({ desc, icon, id, title }) => (
              <div key={id} className="flex flex-col gap-4">
                {icon}
                <h3 className="text-xl font-bold text-grey-900">{title}</h3>
                <p className="text-grey-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="hidden w-1/2 lg:flex justify-center">
          <img src="/advantage.webp" alt="" />
        </aside>
      </div>
    </section>
  );
};

export default Choose;
