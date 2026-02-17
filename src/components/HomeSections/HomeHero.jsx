import React from 'react'
import about from '../../assets/About.png'
import { GiInfinity } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";



const HomeHero = () => {
  return (
    <section
      id="homehero"
      className="min-h-screen bg-[#1F1F1F] flex flex-col px-4 md:px-16 lg:px-24 xl:px-72 2xl:72 justify-center py-10 pt-20 "
    >
  <div className="py-8">
      <hr className="w-14 border-3 border-[#009999] rounded"/>
  </div>
  <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
    
    <div className="flex-1 space-y-6">
      <p className="font-bold text-[#FAFAFA] text-semantic-heading1 text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] tracking-tight">
        Hi, I'm <span className="text-[#008080] block sm:inline">Ugochi</span>
      </p>

      <p className="text-semantic-heading2 md:text-5xl text-4xl leading-12 text-[#FAFAFA] ">
        Building Digital Products <br />
        That Solve Real <br />
        Problems
      </p>

      <p className="text-[#A3A3A3] text-xl leading-7 font-normal text-inter-regular">
        Multidisciplinary Product Manager focused on innovation, user experience, and scalable impact. I transform complex challenges into elegant solutions that drive meaningful business outcomes.
      </p>
      <div className="flex flex-col w-fit space-y-6">
        <div className="flex flex-row gap-4">
          {/*<a*/}
          {/*  href="/NWOKONKO-UGOCHI V.pdf"*/}
          {/*  download*/}
          {/*  className="text-[#00C3D0] md:py-3 p-2 md:px-8 bg-[#141414] border gap-2 rounded-md border-[#00C3D0] flex items-center justify-center w-fit"*/}
          {/*>*/}
          {/*  <HiOutlineDownload className="text-lg" />*/}
          {/*  Download CV*/}
          {/*</a>*/}
          <a href='https://www.linkedin.com/in/ugochi-nwokonko/' className="bg-[#000000] cursor-pointer rounded-full w-11 h-11 flex items-center justify-center">
            <FiLinkedin className="text-white text-xl" />
          </a>

           <a  
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1DskkfswZM3HsWYp6LNzPnbXGcMZoZO31/view?usp=sharing"  className="text-[#00C3D0] md:py-3 md:px-8 p-2 bg-[#141414] border rounded-md border-[#00C3D0] flex items-center justify-center w-fit gap-2">
              <MdOutlineRemoveRedEye className='text-lg'/>
              <p>View CV</p>
            </a>
        </div>

        <div className='flex flex-row gap-3'>
          {/* <a href='mailto:nwokonkougo@gmail.com' className="bg-[#000000] rounded-full w-11 cursor-pointer h-11 flex items-center justify-center">
            <MdOutlineMailOutline className="text-white text-xl h-5 w-5" />
          </a> */}
          {/* <a href='https://www.linkedin.com/in/ugochi-nwokonko/' className="bg-[#000000] cursor-pointer rounded-full w-11 h-11 flex items-center justify-center">
            <FiLinkedin className="text-white text-xl" />
          </a> */}
        </div>
      </div>
    </div>

    <div className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_0_30px_#00C3D0]/50 border-[6px] border-[#1F1F1F] w-80 h-96 mx-auto">
      
      <img
        src={about}
        alt="Profile"
        className="rounded-2xl w-full h-full object-contain"
      />

      <div className="absolute -top-4 -right-1 bg-[#00C3D0] text-white px-2 py-4 rounded-xl shadow-md flex flex-col items-center justify-center">
        <GiInfinity className="text-xl mb-1" />
        <span className="text-[14px] leading-5 text-inter-regular">Innovation</span>
      </div>

      <div className="absolute -bottom-4 -left-4 bg-black/90 border border-gray-300 text-white px-5 py-5 rounded-xl shadow-lg text-center">
        <p className="text-2xl text-inter-bold leading-8 text-[#FAFAFA]">5+</p>
        <p className="text-[14px] leading-5 text-inter-regular">Years Experience</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default HomeHero
