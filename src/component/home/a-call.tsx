import React from "react";
import { ReactTyped as Typed } from "react-typed";
import { motion } from "framer-motion";


const SectionOne = () => {
  return (
    <div
      className="relative bg-[#030516] mt-[98px] text-white bg-cover border-0"
      style={{
        backgroundImage: `url("https://forcythe.com/images/header-background.svg")`,
      }}
    >
      <div className="w-[84%] rounded-[2rem] bg-white bg-opacity-10 py-8 mx-auto mt-14">
        <h1 className="lg:text-[5rem] text-[3.5rem] text-white font-normal ml-4 leading-[60px] lg:leading-[77px] lg:ml-14">
          <Typed
            strings={[
              "We build <span class='text-[#60A6E7]'>products</span> that shape a better future",
            ]}
            typeSpeed={50}
            backSpeed={20}
            loop={false}
            showCursor={false} 
          />
        </h1>

        <p className="text-base text-[#AEA9B1] md:text-lg lg:w-[68%] mx-4 mt-5 lg:mx-14">
          <Typed
            strings={[
              "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.",
            ]}
            typeSpeed={50}
            backSpeed={20}
            loop={false}
            showCursor={false} 
          />
        </p>

        <button className="relative lg:mx-14 mx-4 mt-5 border-none p-4 rounded-full bg-[#fff] hover:bg-[#60A6E7] hover:text-white text-[#030516] text-[16px] font-bold">
          <span className="absolute inset-0 mt-4 p-5 rounded-full border-2 border-dotted border-[#fff] hover:border-[#60A6E7]"></span>
          <span className="relative">Book a Call</span>
        </button>

        <h3 className="text-[2rem] md:block hidden mt-7 leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
          Success in <span className="text-[#60A6E7]">Motion</span> – Our
          clients’ journey
        </h3>
      </div>
      <motion.h3 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-[2rem] md:hidden mt-7 leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center"
      >
        Success in <span className="text-[#60A6E7]">Motion</span> – Our clients’
        journey
      </motion.h3>
    </div>
  );
};

export default SectionOne;
