import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { p, menu, close } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState(" ")
  const [toggle, setToggle] = useState(false)
  return (

    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
      }
    >

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* link */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // where we are currently on the page
            setActive("");
            window.scrollTo(0, 0)
          }}>
          <img src={p}
            className="w-11 h-11 object-contain"
            alt="logo"
          />
          <p className="text-white text-[18px] font-bold flex ">P.S <span className="sm:block hidden">
           &nbsp; | &nbsp; Prateek Singh</span></p>
        </Link>

        {/* ul navigation bar */}
        <ul className="list-none hidden sm:flex flex:row gap-10">
          {
            navLinks.map((link) => (
              <li key={link.id}
                className={`${active === link.title
                  ? "text-white" : "text-secondary"
                  } hover:text-purple-500 text-[18px] font-medium cursor-pointer`}

                  // first this is happening then above part
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
          <Link to="https://www.linkedin.com/in/prateekswyelv1/">
              <div className=' -mr-10 rounded-full w-8 h-8 -mt-0.8 bg-purple-500'>
              <li className='flex font-bold items-center justify-center mt-1.8 text-gray-300'>
              
              <p className='py-1'>in</p>
              </li>
              </div>
              </Link>
        </ul>

        {/* mobile navigation bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* on clicking the menu showing the actual menu */}
          {/* step-1 creating our menu when scrolls or u can say opens down */}
          <div className={`${!toggle ? "hidden" : "flex"}
           p-6 purple-gradient absolute top-20 right-0 mx-4 my-2 min-w-[100px] min-h-[100px]z-10 rounded-xl
           `}>
            {/* ul navigation bar */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {
                navLinks.map((link) => (
                  <li key={link.id}
                    className={`${active === link.title
                      ? "text-white" : "text-secondary"
                      } font-poppins font-medium  cursor-pointer text-[16px] hover:text-white`}
                    //set toggle to (!toggle) to close the opened menu while we are being redirecte dto one of the menu options//
                    
                    //first this is happening and then above part
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)
                    }}

                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
              <Link to="https://www.linkedin.com/in/prateekswyelv1/">
              <div className=' ml-2 rounded-full w-10 h-10 bg-gray-300'>
              <li className='flex font-bold items-center justify-center mt-2 text-purple-500'>
              
              <p className='py-2'>in</p>
              </li>
              </div>
              </Link>
            </ul>
          </div>

        </div>



      </div>

    </nav>

  )
}

export default Navbar