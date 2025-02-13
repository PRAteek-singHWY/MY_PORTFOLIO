import React from 'react'
import BallCanvas2 from './canvas/Ball2'
import BallCanvas1 from './canvas/Ball'
import { SectionWrapper } from "../hoc"
import { technologies_starter } from "../constants"
import { technologies_adv } from "../constants"
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 text-center text-gray-400">

      <div className='flex flex-col flex-wrap' >
        <p className='mb-10 text-bold text-2xl'>Technologies i have Experienced</p>

        <div className="md:hidden block">
        <div className="flex flex-row flex-wrap justify-center gap-10">
{technologies.map((technology) => (

  <div>

    <img

      className='rounded-full h-24 w-24'
      src={technology.icon}
      alt="img"
    />
  </div>
))}
</div>
</div>



        <div className="md:block hidden">


          <div className="flex flex-row flex-wrap justify-center gap-10">


      {technologies_starter.map((technology) => (
            <>


              <div className=" w-28 h-28 "
                key={technology.name}>
                <BallCanvas1 icon={technology.icon} />
              </div>
            </>
          ))}
          </div>
        </div>

      </div>
      <div className='flex flex-col flex-wrap text-bold text-2xl '>
        <p className='mb-10  mt-8'>Technologies I am Learning and Looking forward To learn  </p>



        <div className=" md:block  hidden">
         <div className="flex flex-row flex-wrap justify-center gap-10">
  {technologies_adv.map((technology) => (
    <div className="w-28 h-28" key={technology.name}>
      <BallCanvas2 icon={technology.icon} />


    </div>
  ))}
  </div>
</div>






        <div className="md:hidden block">

        <div className="flex flex-row flex-wrap justify-center gap-10">
{technologies_adv.map((technology) => (

  <div>

    <img

      className='rounded-full h-28 w-28'
      src={technology.icon}
      alt="img"
    />
  </div>
))}
</div>
</div>


      </div>

    </div>
  )
}

export default SectionWrapper(Tech, "")