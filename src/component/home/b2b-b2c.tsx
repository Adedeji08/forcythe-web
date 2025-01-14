import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const StaggeredParagraphs = ({ text, className }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

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

  const stats = [
    { label: "Clients", value: 50 },
    { label: "Projects", value: 120 },
    { label: "Team Leads", value: 10 },
    { label: "Glorious Years", value: 10 },
  ];

  const paragraphs = [
    "We build solutions that help",
    <>
      <span className="text-[#60A6E7]">businesses</span> of all sizes to{" "}
      <span className="text-[#60A6E7]">scale</span>
    </>,
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
        <div className="md:flex flex-col md:flex-row justify-center gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-[#030516] shadow-xl border border-[#030516] p-6 rounded-lg flex-1 text-center md:text-left"
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="animate-border-line w-[50px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent absolute" />
              </div>
              <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                <img
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  className="h-10 w-10 mb-4 mx-auto md:mx-0"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <StaggeredParagraphs
                text={benefit.description}
                className="text-[#B0B3C7] text-base"
              />
            </div>
          ))}
        </div>

        <div
          className="pt-10 w-full lg:pt-30 pb-10 md:pb-14 text-center mt-12 px-5 bg-cover border-0"
          style={{
            backgroundImage: `url("https://forcythe.com/images/arc-L.svg")`,
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="mt-12 md:mt-24"
          >
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1 },
                  },
                }}
                className="text-xl md:text-3xl"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <section className="flex flex-wrap justify-center gap-5 md:gap-7 my-6 md:my-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-[#60A6E7] text-center text-2xl md:text-5xl font-medium md:font-bold"
              >
                +
                <CountUp start={0} end={stat.value} duration={2} className="" />
                <span className="block text-white text-sm md:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default B2B;
