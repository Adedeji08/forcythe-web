import React, { useState } from "react";

const SuccessWay = () => {
  const [activeTab, setActiveTab] = useState("Idea");

  const tabContent = {
    Idea: {
      title: "Your vision is unique.",
      description:
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
      image: "https://forcythe.com/images/camera-man.svg",
    },
    Design: {
      title: "Crafting the blueprint for success.",
      description:
        "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
      image: "https://forcythe.com/images/plan-design.svg",
    },
    Develop: {
      title: "Turning blueprints into reality.",
      description:
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
      image: "https://forcythe.com/images/plan-develop.svg",
    },
    Launch: {
      title: "Your launchpad to the market.",
      description:
        "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
      image: "https://forcythe.com/images/plan-launch.svg",
    },
  };

  return (
    <div className="bg-[#030516] pt-20 pb-10">
      <div className="md:max-w-[84%] md:flex gap-10 mx-3 md:mx-auto">
        {/* Tabs */}
        <div>
          <div className="flex justify-center w-full px-4 h-[80px] items-center border-2 border-[#B3D0F2] rounded-full mb-10">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 h-[60px] font-medium rounded-full ${
                  activeTab === tab ? "bg-[#B3D0F2]" : "text-[#fff]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="max-w-lg">
            <h2 className="text-[2.2rem] mb-4 text-white">
              {tabContent[activeTab].title}
            </h2>
            <p className="text-[#B0B3C7] text-[1.2rem] mb-6">
              {tabContent[activeTab].description}
            </p>
            <button className="relative mx-4 mt-5 border-none p-4 rounded-full bg-[#fff] hover:bg-[#60A6E7] hover:text-white text-[#030516] text-[16px] font-bold">
              <span className="absolute inset-0 mt-4 p-5 rounded-full border-2 border-dotted border-[#fff] hover:border-[#60A6E7]"></span>
              <span className="relative">Book a Call</span>
            </button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between text-white">
          <div>
            <img
              src={tabContent[activeTab].image}
              alt={activeTab}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessWay;
