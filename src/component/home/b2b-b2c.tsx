import React from "react";

const B2B = () => {
  const benefits = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
      icon: "https://forcythe.com/images/layers-three.svg",
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
      icon: "https://forcythe.com/images/layers-three.svg",
    },
    {
      title: "Cost Savings",
      description:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
      icon: "https://forcythe.com/images/layers-three.svg",
    },
  ];

  return (
    <div
      className="text-white"
      style={{
        background:
          "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
      }}
    >
      <div className="md:w-[84%] mx-auto">
        <h2 className="text-center text-[#B3D0F2] font-medium text-2xl md:text-3xl lg:text-4xl mb-8">
          Your best call for B2B/B2C product innovation
        </h2>
        <div className="md:flex flex-col md:flex-row  justify-center gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-[#030516] shadow-xl border border-[#030516] p-6 rounded-lg flex-1 text-center md:text-left "
            >
              {/* Animated border container */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="animate-border-line w-[50px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent absolute" />
                </div>
              </div>
              <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                <img
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  className="h-10 w-10 mb-4 mx-auto md:mx-0"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-[#B0B3C7] text-base">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div
  className="pt-10 w-full lg:pt-30 pb-10 md:pb-14 text-center mt-12 px-5 bg-cover border-0"
  style={{
    backgroundImage: `url("https://forcythe.com/images/arc-L.svg")`,
  }}
>
  <h4 className="text-xl md:text-3xl mt-12 md:mt-24 leading-snug">
    We build solutions that help <br />{" "}
    <span className="text-[#60A6E7]">businesses</span> of all sizes to{" "}
    <span className="text-[#60A6E7]">scale</span>{" "}
  </h4>
  <section className="flex flex-wrap justify-center gap-5 md:gap-7 my-6 md:my-10">
    <div className="text-[#60A6E7] text-center text-2xl md:text-5xl font-medium md:font-bold">
      50+
      <span className="block text-white text-sm md:text-base">Clients</span>
    </div>
    <div className="text-[#60A6E7] text-center text-2xl md:text-5xl font-medium md:font-bold">
      120+
      <span className="block text-white text-sm md:text-base">Projects</span>
    </div>
    <div className="text-[#60A6E7] text-center text-2xl md:text-5xl font-medium md:font-bold">
      10+
      <span className="block text-white text-sm md:text-base">Team Leads</span>
    </div>
    <div className="text-[#60A6E7] text-center text-2xl md:text-5xl font-medium md:font-bold">
      10+
      <span className="block text-white text-sm md:text-base">Glorious Years</span>
    </div>
  </section>
</div>

      </div>
    </div>
  );
};

export default B2B;
