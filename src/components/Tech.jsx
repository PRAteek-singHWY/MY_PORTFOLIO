import React from "react";
import BallCanvas2 from "./canvas/Ball2";
import BallCanvas1 from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import {
  technologies_starter,
  technologies_adv,
  technologies,
} from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 text-center text-gray-400">
      {/* --- SECTION 1: EXPERIENCED --- */}
      <div className="flex flex-col flex-wrap w-full justify-center items-center">
        <p className="mb-10 font-bold text-2xl">
          Technologies I have Experienced
        </p>

        {/* Mobile View */}
        <div className="md:hidden block">
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
              // FIX: Added key here
              <div key={technology.name}>
                <img
                  className="rounded-full h-24 w-24"
                  src={technology.icon}
                  alt={technology.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="md:block hidden">
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies_starter.map((technology) => (
              // FIX: Removed unnecessary <> fragment and ensured key is on the div
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas1 icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 2: LEARNING --- */}
      <div className="flex flex-col flex-wrap w-full justify-center items-center font-bold text-2xl">
        <p className="mb-10 mt-8">Technologies I am Learning</p>

        {/* Desktop View */}
        <div className="md:block hidden">
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies_adv.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas2 icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden block">
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies_adv.map((technology) => (
              // FIX: Added key here
              <div key={technology.name}>
                <img
                  className="rounded-full h-28 w-28"
                  src={technology.icon}
                  alt={technology.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
