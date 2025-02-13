import React from 'react'
import { useState, useRef, } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import { loc,call,twit,email } from '../assets'
import EarthCanvas from './canvas/Earth'
import { SectionWrapper } from '../hoc'
import { fadeIn, slideIn, textVariant } from '../utils/motion'
import { github } from '../assets'
// template_vcwd3jd
// service_udfeztw
// kQ4JKv1ydmuV8k3AB
const Contact = () => {

  // const formRef = useRef();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   location: "",
  //   message: "",
  // });
  // const [loading, setLoading] = useState(false)

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setForm({
  //     ...form, [name]: value
  //   })
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setLoading(true)
  //   emailjs.send(
  //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

  //     {
  //       from_name: form.name,
  //       to_name: "Prateek Singh",
  //       from_email: form.email,
  //       to_email: "prateek23022004@gmail.com",
  //       message: form.message,
  //       location:form.location

  //     },
  //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

  //   )
  //     .then(() => {
  //       setLoading(false)
  //       alert("Thank You, we will converse A.S.A.P")

  //       setForm({
  //         name: "",
  //         email: "",
  //         location: "",
  //         message: "",

  //       })
  //     }
  //       , (err) => {
  //         setLoading(false)
  //         console.log(err)
  //         alert("Uh uhh something went wrong,Please Try Again Later")

  //       }
  //     )
  // }

  return (

    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 
   ">

      
      <motion.div 

      
        className="flex-[0.75] bg-bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get In Touch</p>
        <h2 className={`${styles.sectionHeadText}`}>
          <span className="text-green-500">C</span>
          <span className="text-orange-500">o</span>
          <span className="text-purple-500">n</span>
          <span className="text-yellow-500">T</span>
          <span className="text-green-500">a</span>
          <span className="text-orange-500">c</span>
          <span className="text-purple-500">T</span>

          <span className="text-yellow-500">.</span>
        </h2>


        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        > */}
          {/* <label className="flex flex-col">
            <span className="text-white  font-medium mb-4">Your Name</span> */}
            {/* //--Name--// */}
            {/* <input
              placeholder="Your good name 💛"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 
            placeholder:text-secondary
            text-white rounded-lg outline-none"
            />
          </label> */}

          {/* <label className="flex flex-col">
            <span className="text-white  font-medium mb-4">Your Email</span>
            <input
              placeholder="What's ur Email?"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 
           placeholder:text-secondary
            text-white rounded-lg outline-none"
            /> */}


          {/* </label>
          <label className="flex flex-col">
            <span className="text-white  font-medium mb-4">Your Location</span>
            <input
              placeholder="Wher'e u Located?"
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 
            placeholder:text-secondary
            text-white rounded-lg outline-none"
            />
          </label> */}

{/* 
          <label className="flex flex-col">
            <span className="text-white  font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              placeholder="Heyii !!  
What do u wanna convey ?"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 
            placeholder:text-secondary
            text-white rounded-lg outline-none"
            />
          </label> */}

          {/* <button
            type="submit"
            className="bg-yellow-500 px-8 outline-none shadow-md shadow-primary text-white rounded-xl w-[150px] h-[45px]  font-bold"
          >
            {loading ? "Sending..." : "Send"}

          </button> */}

        {/* </form> */}

<div className="flex gap-2 flex-col text-[20px] font-semibold text-gray-400 mt-4">
        <h3 className='flex'>• Github  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
        <Link to="https://github.com/PRAteek-singHWY">
        <img
        className='w-10 h-10 ml-[69px] mb-6'
          src={github}
          alt={github}
        />
        </Link>
         </h3>


         <h3 className='flex'>• linkedin  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
         <Link to="https://www.linkedin.com/in/prateekswyelv1/">
              <div className=" ml-[65px] rounded-full w-9 h-9 -mt-0.8 bg-gray-200 mb-6">
              <li className="flex font-bold items-center justify-center mt-1.8 text-black">
              
              <p className='py-1'>in</p>
              </li>
              </div>
              </Link>
 </h3>


 <h3 className='flex'>• twitter  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
         <Link to="https://twitter.com/PRATEEK_SWY">
              <div className=" ml-[78px] rounded-full w-10 h-10 -mt-0.8 bg-gray-200 mb-6">
              <li className="flex font-bold items-center justify-center mt-1.8 text-black">
              
              <img
        className='w-12 h-10  mb-6'
          src={twit}
          alt="twit"
        />
              </li>
              </div>
              </Link>
 </h3>

 <h3 className="flex">
  • email&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
  <a href="mailto:prateek23022004@gmail.com">
    <div className="ml-[92px] rounded-full w-10 h-10 -mt-0.8 bg-gray-200 mb-6">
      <li className="flex font-bold items-center justify-center mt-1.8 text-black">
        <img className="w-12 h-10 mb-6" src={email} alt="twit" />
      </li>
    </div>
  </a>
</h3>





 <div className='flex flex-row items-center justify-center ml-4 mt-8'>


<div className=" -ml-[25px] rounded-full w-10 h-10 mt-4 
bg-gray-200">
<img
className='w-10 h-10 '
  src={call}
/>
</div>

<div >
 <h3 className='text-sm ml-2 mt-7 '> 
      +91 6230876581
 </h3>
 </div>
</div>

<div className='flex flex-row items-center justify-center -ml-10 -mt-4'>


<div className=" ml-[40px] rounded-full w-9 h-9 mt-3 
bg-gray-200">
<img
className='w-8 h-8 mt-0.5 ml-0.1'
  src={loc}
/>
</div>

<div className='-ml-5'>
 <h3 className='text-sm ml-8 mt-7'> 
      Asia, India, Himachal Pradesh, Kangra, 176097
 </h3>
 </div>
</div>

</div>
      </motion.div>

      {/* //loading the form */}
      <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>


 
  )
}

export default SectionWrapper(Contact, "contact")