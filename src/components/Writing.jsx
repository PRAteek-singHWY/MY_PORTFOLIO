import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { writing } from "../constants/journey";

const Writing = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Written up</p>
      <h2 className={styles.sectionHeadText}>Writing.</h2>
    </motion.div>
    <div className="mt-8 grid gap-5 max-w-4xl">
      {writing.map((piece) => (
        <a
          key={piece.url}
          href={piece.url}
          target="_blank"
          rel="noreferrer"
          className="group block rounded-2xl p-6 bg-tertiary border border-white/5 hover:border-accent transition-colors"
        >
          <p className="text-[13px] uppercase tracking-wider text-secondary">{piece.venue}</p>
          <h3 className="mt-2 text-white text-[20px] sm:text-[24px] font-bold leading-snug group-hover:text-accent transition-colors">
            {piece.title}
          </h3>
          <p className="mt-3 text-secondary text-[15px] leading-relaxed">{piece.summary}</p>
          <p className="mt-4 text-[14px] text-white font-semibold">Read it on {piece.venue}</p>
        </a>
      ))}
    </div>
  </>
);

export default SectionWrapper(Writing, "writing");
