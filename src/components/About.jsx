import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Third-year Computer Science student at BITS Pilani and Scaler School of
      Technology. I spent GSoC 2026 at the OWASP Foundation building the link
      decision engine inside OpenCRE, the open catalogue that connects
      fragmented security standards into one graph, and I stayed on as the
      second-highest contributor to that project. At Evaratus (Scaler AI Labs) I
      build RL environments and evaluation infrastructure for frontier AI labs.
      <br />
      <br />
      Before that came four years of shipping: full-stack MERN products written
      by hand from 17, a chat system rebuilt stateless on Redis Pub/Sub when the
      first version broke across instances, and seven PRs merged upstream in
      2026 by the maintainers of Kuadrant, Apicurio, OpenTelemetry and OpenKruise.
      <br />
      <br />
      The thread through all of it is the same question: how do you tell that a
      system is wrong when its output looks right? That is what pulls me toward
      monitor robustness and scalable oversight, and it is why the systems I
      build are designed to escalate to a human rather than guess.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
