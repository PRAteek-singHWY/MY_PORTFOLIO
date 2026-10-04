import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => (
  <div className="bg-black-100 rounded-[20px]">
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[260px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>In their words</p>
        <h2 className={styles.sectionHeadText}>What others say.</h2>
      </motion.div>
    </div>
    <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials.map((t, index) => (
        <motion.figure
          key={t.name}
          variants={fadeIn("", "spring", index * 0.5, 0.75)}
          className="bg-black-200 p-8 sm:p-10 rounded-3xl w-full max-w-3xl"
        >
          <p className="text-white font-black text-[48px] leading-none">&ldquo;</p>
          <blockquote className="mt-2 text-white tracking-wide text-[17px] sm:text-[18px] leading-[1.8]">
            {t.testimonial}
          </blockquote>
          <figcaption className="mt-6 text-white font-bold text-[16px]">
            <span className="text-accent">@</span> {t.name}
            <span className="block text-secondary font-normal text-[13px] mt-1">{t.designation}</span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Feedbacks, "words");
