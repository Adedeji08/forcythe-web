import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#071626] py-16">
      <div className="w-[84%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-transparent border border-gray-600 rounded-l-full px-4 py-2 flex-grow focus:outline-none focus:border-gray-400"
              />
              <button className="bg-white text-black px-6 py-2 rounded-r-full hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="notifications"
                className="rounded border-gray-600"
              />
              <label htmlFor="notifications" className="text-[10px] text-white">
                I agree to receive other notifications from Forcythe
              </label>
            </div>
          </div>

          {/* Company Description */}
          <div className="space-y-4">
            <img
              src="https://forcythe.com/images/forcythe%20logo.svg"
              alt="Forcythe"
              className="h-10"
            />
            <p className="text-[#AEA9B1] text-base">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="flex gap-2">
              <Link
                to="https://web.facebook.com/forcythe/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
              >
                <img
                  src="https://forcythe.com/images/facebook.svg"
                  alt="icon"
                />
              </Link>

              <Link
                to="https://www.instagram.com/forcythe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
              >
                <img
                  src="https://forcythe.com/images/instagram.svg"
                  alt="icon"
                />
              </Link>

              <Link
                to="https://x.com/forcythe_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
              >
                <img src="https://forcythe.com/images/x.svg" alt="icon" />
              </Link>

              <Link
                to="https://www.linkedin.com/company/forcythe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
              >
                <img
                  src="https://forcythe.com/images/linkedin.svg"
                  alt="icon"
                />
              </Link>

              <Link
                to="https://www.youtube.com/@forcythe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
              >
                <img src="https://forcythe.com/images/youtube.svg" alt="icon" />
              </Link>

              <Link
                to="https://creators.spotify.com/pod/show/the-future-insight"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
              >
                <img src="https://forcythe.com/images/Icon.svg" alt="icon" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[#B3D0F2]">
              {[
                "About",
                "Services",
                "Portfolio",
                "Studio",
                "Foundation",
                "Careers",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#B3D0F2]">
          <p className="text-[#B3D0F2]">
            Copyright © 2024 Forcythe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
