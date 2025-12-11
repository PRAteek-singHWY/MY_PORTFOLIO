import React from "react";
import BallCanvas1 from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies_starter, technologies_adv } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 text-center text-gray-400">
      {/* --- SECTION 1: EXPERIENCED (Keep as 3D Balls) --- */}
      <div className="flex flex-col flex-wrap w-full justify-center items-center">
        <p className="mb-10 font-bold text-2xl text-white">
          Technologies I have Experienced
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies_starter.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              {/* Keeping 3D balls here is fine as long as there are < 12 items */}
              <BallCanvas1 icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: LEARNING (Convert to Images to Save Memory) --- */}
      <div className="flex flex-col flex-wrap w-full justify-center items-center font-bold text-2xl mt-10">
        <p className="mb-10 mt-8 text-white">Technologies I am Learning</p>

        {/* Using Images instead of 3D Canvas prevents the "Too Many Contexts" crash */}
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies_adv.map((technology) => (
            <div
              key={technology.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="w-24 h-24 bg-tertiary rounded-full flex justify-center items-center border-[2px] border-gray-600 hover:border-white transition-all">
                <img
                  className="h-16 w-16 object-contain"
                  src={technology.icon}
                  alt={technology.name}
                />
              </div>
              <p className="text-sm text-secondary font-normal">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
