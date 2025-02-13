import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { profile } from "../assets"
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Heyi, I'm
            <span >&nbsp;</span>

            <span className="text-green-500">P</span>
            <span className="text-orange-500">R</span>
            <span className="text-purple-500">A</span>
            <span className="text-yellow-500">T</span>
            <span className="text-indigo-500">e</span>
            <span className="text-blue-500">e</span>
            <span className="text-red-500">K</span> </h1>
          <p className={`${styles.heroSubText}mt-2 text-white-100`}>I'm a Full Stack Web-Developer, <br className="sm:block hidden"

          />developin' responsive, beautiful, 3D & Ai integrated Web Apps.
          </p>
        </div>
        
      </div>

      {/* <ComputersCanvas /> */}
      <div className="lg:hidden flex items-center justify-center">

      <img className="rounded-full mt-[400px] w-[180px] h-[180px]
      " src={profile} alt="profile_img"></img>
      </div>
      <ComputersCanvas />

      <div  className=" absolute xs:bottom-10 sm:bottom-1 bottom-32 w-full flex justify-center items-center">
        <a href="#about" >
        <div className="w-[35px] 
        h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">

          <motion.div
          animate={{
         y : [0, 24, 0]
          }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
        </a>
      </div>
    </section>
  )
}

export default Hero 