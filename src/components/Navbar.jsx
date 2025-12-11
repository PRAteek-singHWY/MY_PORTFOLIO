import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { p, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* --- LOGO --- */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={p} className="w-11 h-11 object-contain" alt="logo" />
          <p className="text-white text-[18px] font-bold flex ">
            P.S{" "}
            <span className="sm:block hidden">
              &nbsp; | &nbsp; Prateek Singh
            </span>
          </p>
        </Link>

        {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
        <div className="hidden sm:flex flex-row gap-10 items-center">
          {/* Download CV Button (Desktop) */}
          <a
            href="/Prateek_s_Resume.pdf"
            download="Prateek_Singh_Resume.pdf"
            className="bg-[#915eff] text-white py-2 px-4 rounded-xl outline-none font-bold shadow-md shadow-primary hover:bg-[#7a45e5] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Download CV</span>
          </a>

          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-purple-500 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}

            {/* LinkedIn Icon */}
            <Link
              to="https://www.linkedin.com/in/prateekswyelv1/"
              target="_blank"
            >
              <div className="rounded-full w-8 h-8 bg-purple-500 flex justify-center items-center">
                <p className="text-gray-300 font-bold">in</p>
              </div>
            </Link>
          </ul>
        </div>

        {/* --- MOBILE NAVIGATION --- */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"}
           p-6 purple-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* Download CV Button (Mobile - Centered in Menu) */}
              <li className="w-full">
                <a
                  href="/Prateek_s_Resume.pdf"
                  download="Prateek_Singh_Resume.pdf"
                  className="bg-white text-primary w-full py-2 px-4 rounded-xl font-bold text-center block shadow-md hover:bg-gray-200 transition-all text-[14px]"
                >
                  Download CV
                </a>
              </li>

              {/* LinkedIn (Mobile) */}
              <Link
                to="https://www.linkedin.com/in/prateekswyelv1/"
                target="_blank"
                className="self-center"
              >
                <div className="rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center">
                  <p className="text-purple-500 font-bold">in</p>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
