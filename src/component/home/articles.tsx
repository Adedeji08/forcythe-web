import React from "react";

const articles = [
  {
    title: "Will AI take over Art?",
    image:
      "https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=1920&q=75", // Replace with actual image URL
    date: "May 29th, 2024",
    author: "The Reformist",
    category: "Blog",
    link: "https://forcythe.com/blog/ai-takeover-art",
  },
  {
    title: "Cryptocurrency vs Tokens",
    image:
      "https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=1920&q=75",
    date: "May 29th, 2024",
    author: "The Reformist",
    category: "Blog",
    link: "https://forcythe.com/blog/crypto-vs-tokens",
  },
  {
    title: "Cryptocurrency and Crypto asset",
    image:
      "https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=1920&q=75",
    date: "May 29th, 2024",
    author: "The Reformist",
    category: "Blog",
    link: "https://forcythe.com/blog/crypto-and-asset",
  },
];

const Articles = () => {
  return (
    <div
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
      className="pt-36"
    >
      <div className="w-[84%] mx-auto">
        <div className="flex justify-between text-white">
          <h1 className="text-[2rem] mt-4 leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem]">
            Read our articles, news and product blog
          </h1>

          <button className="relative lg:mx-14 mt-5 border-none p-4 rounded-full bg-[#fff] hover:bg-[#60A6E7] hover:text-white text-[#030516] text-[16px] font-bold">
            <span className="absolute inset-0 mt-4 p-5 rounded-full border-2 border-dotted border-[#fff] hover:border-[#60A6E7]"></span>
            <span className="relative"> Visit Blog</span>
          </button>
        </div>

        {/* Articles Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                className="w-full rounded-xl"
                src={article.image}
                alt={article.title}
              />
              <div className="p-4 bg-[#030516] shadow hover:shadow-[#60A6E7] border-l-2 mt-3">
                <div className="items-center mb-2 text-[#fff]">
                  <span className="mr-2 block">{article.category}</span>
                  <span className="text-sm text-[#B0B3C7] block">
                    {article.author} • {article.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  {article.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-[2.5rem] text-[#60A6E7] md:block hidden sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] max-w-[60%] mx-auto text-center">
        Ready to Scale?
      </h3>
      <h3 className="text-[2.5rem] text-white md:block hidden leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] max-w-[56%] mx-auto text-center">
        Join successful brands that chose us as their
        <span className="text-[#60A6E7]"> growth accelerator</span>
      </h3>

      <div className="flex justify-center items-center py-10">
        <button className="relative lg:mx-14 mt-5 border-none p-4 rounded-full bg-[#fff] hover:bg-[#60A6E7] hover:text-white text-[#030516] text-[16px] font-bold">
          <span className="absolute inset-0 mt-4 p-5 rounded-full border-2 border-dotted border-[#fff] hover:border-[#60A6E7]"></span>
          <span className="relative"> Book a Call</span>
        </button>
      </div>
    </div>
  );
};

export default Articles;
