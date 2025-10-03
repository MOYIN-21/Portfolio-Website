import React from 'react'
import about from '../../assets/About.png'
import { GiInfinity } from "react-icons/gi";

const HomeHero = () => {
  return (
    // <section 
    //   id="homehero" 
    //   className="min-h-screen bg-[#1F1F1F] py-2 flex flex-col px-4 justify-center"
    // >
    //   <div className='w-full md:px-72 flex flex-col gap-5'>
    //         <hr className="w-28 border-4 border-[#009999] rounded" />
    //         <div className="flex md:flex-row flex-col justify-between ">
    //       <div className="space-y-6 flex flex-col items-start text-left">
    //   <p className="text-semantic-heading1 text-[#FAFAFA]">
    //     Hi, I'm <span className="text-[#008080]">Ugochi</span>
    //   </p>

    //   <p className="heading-2 text-[#FAFAFA]">
    //     Building Digital Products <br /> 
    //     That Solve Real <br /> 
    //     Problems
    //   </p>

    //   <p className="text-inter-regular text-[#A3A3A3]">
    //     Multidisciplinary Product Manager focused on <br />
    //     innovation, user experience, and scalable impact. I <br />
    //     transform complex challenges into elegant solutions <br />
    //     that drive meaningful business outcomes.
    //   </p>
    // </div>


    //     <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-teal-500/30">
    //       <img
    //         src={about}
    //         alt="Profile"
    //         className="rounded-2xl w-80 h-80 object-contain"
    //       />

    //       <div className="absolute top-2 right-2 bg-[#00C3D0] text-white px-4 py-2 rounded-xl shadow-sm flex flex-col items-center">
    //         <GiInfinity className="text-2xl mb-1" />
    //         <span className="text-sm font-medium">Innovation</span>
    //       </div>

    //       <div className="absolute bottom-2 left-2 bg-black/80 border border-[#EBEBEB] text-white px-4 py-2 rounded-xl shadow-md text-center">
    //         <p className="text-lg font-bold">5+</p>
    //         <p className="text-sm">Years Experience</p>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
     
    // </section>
    <section
  id="homehero"
  className="min-h-screen bg-[#1F1F1F] flex flex-col px-4 md:px-16 lg:px-24 xl:px-72 2xl:72 justify-center"
>
  <hr className="w-14 border-3 border-[#009999] rounded" />
  <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
    
    <div className="flex-1 space-y-6">
      <p className="text-semantic-heading1 leading-10 md:text-7xl text-2xl text-[#FAFAFA]">
        Hi, I'm <span className="text-[#008080]">Ugochi</span>
      </p>

      <p className="text-semantic-heading2 text-5xl leading-12 text-[#FAFAFA] ">
        Building Digital Products <br />
        That Solve Real <br />
        Problems
      </p>

      <p className="text-[#A3A3A3] text-xl leading-7 font-normal text-inter-regular">
        Multidisciplinary Product Manager focused on innovation, user experience, and scalable impact. I transform complex challenges into elegant solutions that drive meaningful business outcomes.
      </p>
    </div>

    <div className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-xl shadow-teal-500/30">
      <img
        src={about}
        alt="Profile"
        className="rounded-2xl w-80 h-80 object-contain"
      />

      <div className="absolute top-2 right-2 bg-[#00C3D0] text-white px-4 py-2 rounded-xl shadow-sm flex flex-col items-center">
        <GiInfinity className="text-2xl mb-1" />
        <span className="text-sm font-medium">Innovation</span>
      </div>

      <div className="absolute bottom-2 left-2 bg-black/80 border border-[#EBEBEB] text-white px-4 py-2 rounded-xl shadow-md text-center">
        <p className="text-lg font-bold">5+</p>
        <p className="text-sm">Years Experience</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default HomeHero
