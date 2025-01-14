import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OurClient = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const animationCompleteCount = useRef(0);

  const AnimatedText = ({ text }) => {
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

  const tabs = useMemo(
    () => [
      {
        id: 1,
        name: "Starks",
        image: "https://forcythe.com/images/starks.svg",
        title: "Starks Associate",
        description:
          "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
        profileImage: "https://forcythe.com/images/john.svg",
        position: "John, Management",
      },
      {
        id: 2,
        name: "ExecutivePros",
        image: "https://forcythe.com/images/ExecutivePros%20Logo.svg",
        title: "Executive Pros",
        description:
          "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
        profileImage: "https://forcythe.com/images/executive-pro-ceo.svg",
        position: "Testimony, Co-founder",
      },
      {
        id: 3,
        name: "stac.ai",
        image: "https://forcythe.com/images/stacai.svg",
        title: "Stac.ai",
        description:
          "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
        profileImage: "https://forcythe.com/images/edwin.svg",
        position: "Edwin, Former CTO",
      },
      {
        id: 4,
        name: "Iwaria",
        image: "https://forcythe.com/images/iwaria.svg",
        title: "Iwaria",
        description:
          "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
        profileImage: "https://forcythe.com/images/iwaria-founder.svg",
        position: "Iwaria, Founder",
      },
      {
        id: 5,
        name: "Beaupreneur",
        image: "https://forcythe.com/images/Beaupreneur.svg",
        title: "Iwaria",
        description:
          "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
        profileImage: "https://forcythe.com/images/christina.svg",
        position: "Christiana, Founder",
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(1);
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    if (!isAnimating && animationCompleteCount.current === 3) {
      setTimeout(() => {
        const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex].id);
        setIsAnimating(true);
        animationCompleteCount.current = 0;
      }, 1000);
    }
  }, [isAnimating, activeTab, tabs]);

  const images = [
    "https://forcythe.com/images/Project%20Images/stac.svg",
    "https://forcythe.com/images/Project%20Images/activity.svg",
    "https://forcythe.com/images/Project%20Images/africaFund.svg",
    "https://forcythe.com/images/Project%20Images/starks.svg",
    "https://forcythe.com/images/Project%20Images/exec-pro.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
  ];
  const paragraphs = [
    <>
      Discover the{" "}
      <span className="text-[#60A6E7]">transformative stories</span> of
    </>,
    "startups that scaled new heights with us",
  ];

  return (
    <>
      <div className="our-client-container">
        <div className="scroller">
          <div className="image-row move-left">
            {[...images, ...images, ...images].map((src, index) => (
              <img
                key={`client-top-${index}`}
                src={src}
                alt={`client-${index}`}
              />
            ))}
          </div>

          <div className="image-row move-right">
            {[...images, ...images, ...images].map((src, index) => (
              <img
                key={`client-bottom-${index}`}
                src={src}
                alt={`client-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#030516]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 2 },
                },
              }}
              className="text-[2rem] text-white md:block hidden leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[0rem] mb-12 max-w-[60%] mx-auto text-center"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <div className="relative flex flex-col items-center">
          <div className="flex border border-[#60A6E7] rounded-full justify-center items-center gap-4 mb-10 w-[84%] mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 flex justify-center items-center transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0C2645] text-white"
                    : "bg-transparent text-gray-400"
                } ${tab.id === 1 ? "rounded-l-full" : ""} ${
                  tab.id === tabs.length ? "rounded-r-full" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <img
                  src={tab.image}
                  alt={tab.name}
                  className="h-20 w-20 object-contain"
                />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div
                key={activeTab}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="lg:w-[50%] md:w-[70%] w-full mx-auto flex flex-col lg:flex-row gap-6 items-center bg-[#0C2645] p-6 rounded-2xl"
              >
                <motion.div className="text-white lg:w-1/2">
                  <motion.div className="text-xl font-bold">
                    <AnimatedText text={activeContent.title} />
                  </motion.div>
                  <motion.div className="mt-4">
                    <AnimatedText text={activeContent.description} />
                  </motion.div>
                  <motion.div className="mt-4">
                    <AnimatedText text={activeContent.position} />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="lg:w-1/2"
                >
                  <img
                    src={activeContent.profileImage}
                    alt={activeContent.title}
                    className="rounded-lg w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default OurClient;
