import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        // {/* fadeIn {*-4->properties-*}(direction,type,delay,duration of animation) */}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" bg-tertiary 
          rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>IntroDuction</p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-green-500">O</span>
          <span className="text-orange-500">v</span>
          <span className="text-purple-500">e</span>
          <span className="text-yellow-500">r</span>
          <span className="text-indigo-500">V</span>
          <span className="text-blue-500">i</span>
          <span className="text-red-500">e</span>
          <span className="text-green-500">w</span>
          <span className="text-orange-500">.</span>
        </h2>
      </motion.div>
      {/* fadeIn {*-4->properties-*}(direction,type,delay,duration of animation) */}
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[25px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am Prateek Singh. I am 19 years old and have been coding for the past
        4 years. I love learning new tools and tech. I am a curious and Fully
        stacked web-developer developing web apps using M-E-R-N STACK, react.js,
        three.js, tailwind, and multiple Libraries ( TAILWIND CSS,
        FRAMER-MOTION, EMAIL-js , MATERIAL-ui ) My interests include WEB-3, AI,
        NEUROLOGY and OuteR SpacE (galaxies, celestial bodies). I started My
        coding journey in class 11th and it's been 4.5 years. iT'S been 8 months
        when i started my WeB-DeV Journey, starting from Udemy Course to
        creating projects and imaginative and interactive ui's with my learnings
        . My D-E-V journey is going So good and m enjoying learning so Much.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            icon={service.icon}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

// export default About

export default SectionWrapper(About, "about");
