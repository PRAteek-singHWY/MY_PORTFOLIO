import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from '../styles'
styles
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#662d91", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid white " }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >

    
      <div>

        {/* names of work experiences */}
        <h3
          className="text-white text-[24px] font-bold">{experience.title}
        </h3>

        {/* key point is bullet point about each experience in front of the time line */}
        <p className=" text-secondary text-[18px] font-semibold" >{experience.company_name}</p>

      </div>

      <ul className=" list-disc mt-5 ml-5 space-y-2">
      {experience.points.map((point,index)=>(
        <li key={`experience-point-${index}`}
        className="text-white-100 
        text-[14px] pl-1 tracking-wider"
        >
          {/* {experience.points[index]} */}
          {point}
        </li>
        ))
      }
      </ul>

    </VerticalTimelineElement>

  )
}
const Experience = () => {
  return (
    <>

      {/* //textVariant is going to make our p tags animate// */}

      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}>What I have done So Far</p>
        <h2 className={styles.sectionHeadText}>


          <span className="text-green-500">W</span>
          <span className="text-orange-500">o</span>
          <span className="text-purple-500">r</span>
          <span className="text-yellow-500">K</span>
          <span className="gradient-text">&nbsp;</span>



          <span className="gradient-text">&nbsp;</span>
          <span className="text-green-500">E</span>
          <span className="text-orange-500">x</span>
          <span className="text-purple-500">P</span>
          <span className="text-yellow-500">e</span>
          <span className="text-indigo-500">r</span>
          <span className="text-blue-500">i</span>
          <span className="text-red-500">e</span>
          <span className="text-green-500">n</span>
          <span className="text-orange-500">c</span>
          <span className="text-indigo-500">E</span>
          <span className="text-green-500">S</span>
          <span className="text-orange-500">.</span>
        </h2>
      </motion.div>


      <div className="mt-20 flex flex-row">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}


            />
          ))}

        </VerticalTimeline>


      </div>

    </>

  )
}

export default SectionWrapper
  (Experience, "work")