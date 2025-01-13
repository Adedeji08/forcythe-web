import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

function Navbar({ footerRef }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  const routes = [
    { path: "/about-us", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/studio", label: "Studio" },
    { path: "/foundation", label: "Foundation" },
  ];

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 right-0 w-full bg-[#030516] h-[98.5px] transition-all duration-300 z-50",
        {
          "bg-opacity-70": scrolled,
        }
      )}
    >
      <div className="max-w-screen-xl mx-auto md:py-6 py-3 w-[84%] relative">
        <div className="flex justify-between items-center cursor-pointer">
          <div className="md:flex gap-1">
            <Link
              to="/"
              className="w-[300px] md:w-[180px] h-[10px] md:h-[15px]"
            >
              <img
                src="https://forcythe.com/images/forcythe%20logo.svg"
                alt="logo"
              />
            </Link>
            <div className="flex gap-4 text-[18px] h-[30px] justify-end">
              {routes.map(
                (route) =>
                  (route || isMenuOpen) && (
                    <Link
                      key={route.path}
                      to={route.path}
                      onClick={closeMenu}
                      className={classNames(
                        "text-[18px] text-white font-bold gap-9 px-2 py-1 hidden md:block w-fit",
                        {
                          "text-[#60A6E7] rounded-2xl":
                            location.pathname === route.path,
                        }
                      )}
                    >
                      <button>{route.label}</button>
                    </Link>
                  )
              )}
            </div>
          </div>

         
            <button className="relative hidden md:block border-none p-4 rounded-full bg-[#fff] hover:bg-[#60A6E7] hover:text-white text-[#030516] text-[16px] font-bold">
              <span className="absolute inset-0 mt-4 p-5 rounded-full border-2 border-dotted border-[#fff] hover:border-[#60A6E7]"></span>
              <span className="relative">Book a Call</span>
            </button>
        

          <button onClick={toggleMenu} className="block md:hidden pt-4
          
          ">
            <img src="https://forcythe.com/images/menu.svg" alt="icon" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:relative md:max-w-[100%] md:[600px] ml-auto inset-0 z-50 justify-center">
          <div className="relative justify-end items-end top-[328px] z-50 md:top-[75px] md:w-full left-1/2 w-[60%]  h-fit transform -translate-x-1/2 -translate-y-1/2 pt-8 rounded-md"
          style={{background: "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)"}}
          >
            <ul className="flex flex-col gap-3  leading-[60px] text-[20px] px-7 md:text-[26px] h-[580px] text-left text-[#040821] font-semibold">
              {routes.map((route) => (
                <li
                  key={route.path}
                  className={classNames(
                    "font-semibold text-white border-[#fff]",
                    {
                      "border-b-3 border-[#0979A1]":
                        location.pathname === route.path,
                    }
                  )}
                >
                  <Link to={route.path} onClick={closeMenu}>
                    {route.label}
                  </Link>
                </li>
              ))}
              <li className="font-semibold">
                <button onClick={scrollToFooter}>Contact</button>
              </li>
            </ul>
          </div>

          <div className="md:hidden px-5">
            <button className="px-12 rounded-xl bg-[#03B4FF] text-white w-full h-[40px] text-[12px] font-bold">
              <Link
                to="https://t.me/+dnHc3oBDisg4NGE0"
                rel="noopener noreferrer"
                target="__blank"
                onClick={closeMenu}
              >
                Join Waitlist
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
