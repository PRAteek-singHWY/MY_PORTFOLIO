import { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profile } from "../assets";
import { useReducedMotion } from "../utils/media";

const Hero = () => {
  const reducedMotion = useReducedMotion();
  const textBlock = useRef();

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] mx-auto flex flex-col">
      <div className={`${styles.paddingX} pt-[120px] max-w-7xl mx-auto w-full flex flex-row items-start gap-5 relative z-10`} ref={textBlock}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="min-w-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-accent">Prateek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build systems that know when they{" "}
            <br className="sm:block hidden" />
            don&apos;t know, and I measure{" "}
            <br className="sm:block hidden" />
            whether that holds.
          </p>
          <p className="mt-6 text-[14px] sm:text-[16px] text-secondary">
            <span className="block sm:inline">
              <span className="text-white font-semibold">Google Summer of Code 2026</span> @ OWASP OpenCRE
            </span>
            <span className="mx-2 hidden sm:inline" aria-hidden="true">·</span>
            <span className="block sm:inline">SDE Intern @ Evaratus</span>
            <span className="mx-2 hidden sm:inline" aria-hidden="true">·</span>
            <span className="block sm:inline">President, Open Source Committee</span>
            <span className="block mt-1 text-accent">Research interest: monitor robustness and scalable oversight.</span>
          </p>

          <img
            className="lg:hidden mt-8 rounded-full w-[120px] h-[120px] object-cover"
            src={profile}
            alt="Prateek Singh"
          />
        </div>
      </div>

      {/* The shared canvas draws the desk computer into this box. */}
      <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] w-full max-w-7xl mx-auto lg:absolute lg:inset-0 lg:max-w-none">
        <ComputersCanvas className="absolute inset-0" clearBelow={textBlock} />
      </div>

      <div className="w-full flex justify-center items-center pb-8 pt-4 lg:absolute lg:bottom-4 lg:pb-0">
        <a href="#highlights" aria-label="Scroll to highlights" className="p-2">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
