import React from 'react'
import { styles } from '../styles'
import { motion } from "framer-motion"
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { profile } from '../assets'
const FeedBackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image }) => {
  return (
    <motion.div variants={fadeIn("", "spring",
      index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p 
        className="text-white 
        leading-[1.9]
        tracking-wider
        
         text-[18px]"
        >{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">

          <div className="flex-1 flex flex-col">

            <p className="text-white font-bold text-[16px]" >
              <span className="blue-text-gradient ">@</span> {name}
            </p>
            
            {/* <p className="mt-1 
            text-secondary text-[12px]">
              {designation} of {company}
            </p> */}

          </div>

            <img
              src={profile}
              alt={`feedback-by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            >
            </img>
            
        </div>

      </div>
      </motion.div>

  )
}

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 
    rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl 
      min-h-[300px]`}>

        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Mine and  others Sayings</p>
          <h2 className={`${styles.sectionHeadText}`}>
            <span className="text-green-500">T</span>
            <span className="text-orange-500">e</span>
            <span className="text-purple-500">S</span>
            <span className="text-yellow-500">t</span>
            <span className="text-green-500">i</span>
            <span className="text-orange-500">M</span>
            <span className="text-purple-500">o</span>
            <span className="text-yellow-500">N</span>
            <span className="text-green-500">i</span>
            <span className="text-purple-500">a</span>
            <span className="text-orange-500">L</span>
            
            <span className="text-green-500">S</span>
            <span className="text-yellow-500">.</span>
          </h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (

          <FeedBackCard
            key={`testimony-${testimonial.name}`}
            index={index}
            {...testimonial}
          />

        ))}

      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks,"")