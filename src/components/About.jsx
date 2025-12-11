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
        I am a Full-Stack Developer and Creative Technologist with over 4 years
        of coding experience. I specialize in building scalable,
        high-performance web applications using the MERN Stack, Next.js 16, and
        TypeScript. My passion lies at the intersection of AI Engineering and
        Interactive 3D Web, leveraging tools like Three.js and RAG Pipelines to
        create immersive digital experiences. Currently, I am deep-diving into
        System Design, Web3, and Neurology, constantly pushing the boundaries of
        what's possible on the web.
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
