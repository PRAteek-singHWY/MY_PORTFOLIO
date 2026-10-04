import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { p, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={p} className="w-11 h-11 object-contain" alt="logo" />
          <p className="text-white text-[18px] font-bold flex whitespace-nowrap">
            P.S <span className="xl:block hidden">&nbsp;|&nbsp; Prateek Singh</span>
          </p>
        </Link>

        <div className="hidden sm:flex flex-row md:gap-10 gap-5 items-center">
          <a
            href="/Prateek_s_Resume.pdf"
            download="Prateek_Singh_Resume.pdf"
            className="bg-accent text-on-accent py-2 px-4 rounded-xl font-bold shadow-md shadow-primary hover:bg-accent-dim transition-all whitespace-nowrap"
          >
            Download CV
          </a>
          <ul className="list-none flex flex-row items-center md:gap-10 gap-5">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li>
              <a href="https://www.linkedin.com/in/prateekswyelv1/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <span className="rounded-full w-8 h-8 bg-accent flex justify-center items-center text-on-accent font-bold">in</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button type="button" onClick={() => setToggle(!toggle)} aria-label="Menu" className="p-2 -mr-2">
            <img src={toggle ? close : menu} alt="" className="w-[28px] h-[28px] object-contain" />
          </button>
          <div className={`${toggle ? "flex" : "hidden"} p-6 purple-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-medium text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="block py-1">{link.title}</a>
                </li>
              ))}
              <li className="w-full">
                <a
                  href="/Prateek_s_Resume.pdf"
                  download="Prateek_Singh_Resume.pdf"
                  className="bg-white text-primary w-full py-2 px-4 rounded-xl font-bold text-center block text-[14px]"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
