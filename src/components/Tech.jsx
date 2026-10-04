import { createRef, useMemo } from "react";
import { motion } from "framer-motion";

import { BallGrid } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { technologies_starter } from "../constants";

const Tech = () => {
  // One ref per DOM cell; the single 3D scene reads them to place each ball.
  const cells = useMemo(() => technologies_starter.map(() => createRef()), []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I build with</p>
        <h2 className={styles.sectionHeadText}>Stack.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col items-center text-center">
        <div className="relative w-full max-w-4xl">
          <ul className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-7 gap-x-4 gap-y-6">
            {technologies_starter.map((technology, index) => (
              <li key={technology.name} className="flex flex-col items-center gap-2">
                <div ref={cells[index]} className="w-full max-w-[112px] aspect-square" />
                <span className="text-[13px] text-secondary">{technology.name}</span>
              </li>
            ))}
          </ul>
          <BallGrid items={technologies_starter} cells={cells} className="absolute inset-0" />
        </div>
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "stack");
