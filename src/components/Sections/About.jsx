import React from 'react';
import about from '../../assets/About.png';
import { GiInfinity } from "react-icons/gi";
import Location from '../../assets/Location.svg';
import TechFlow from '../../assets/TechFlow.png';
import karaboLogo from '../../assets/KarraboLogo.svg';
import { TiArrowRight } from "react-icons/ti";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import semicolon from '../../assets/SemicolonLogo.svg';
import FooterCTASection from '../reusables/FooterCTASection'

const experiences = [
  {
    role: "Head of Partnership - Karrabo",
    logo: karaboLogo,
    duration: "06/2024 – 04/2025",
    location: "Lagos, Nigeria",
    description: "",
    achievements: [
      "Drove strategic fintech partnerships aligned with the product roadmap and GTM strategy.",
      "Led the sourcing, negotiation, and management of third-party service agreements.",
      "Delivered partnerships that enabled key compliance and feature rollout initiatives."
    ]
  },
  {
    role: "Technical Product Manager",
    logo: semicolon,
    duration: "01/2024 – 04/2025",
    location: "Lagos, Nigeria",
    description: "Led the design and delivery of fintech products, working closely with engineering, compliance, and operations teams",
    achievements: [
      "Shipped secure payment features used by 2M+ customers.",
      "Reduced customer support tickets by 25% through UX improvements.",
      "Collaborated with compliance team to ensure 100% regulatory adherence."
    ]
  },
  {
    role: "Software Engineer",
    logo: semicolon,
    duration: "09/2022 – 01/2024",
    location: "Lagos, Nigeria",
    description: "Worked in an agile team developing internal and client-facing applications with a focus on user experience and system reliability",
    achievements: [
      "Contributed to the full-stack development of Learnspace (now Meedl), a loan management platform, with modules for credit scoring, disbursement, and repayment tracking."
    ]
  }
];

const education = [
  {
    program: "Executive Entrepreneurship Program",
    school: "Henley Business School London",
    duration: "08/2023 – 09/2023"
  },
  {
    program: "BS, Computer Science",
    school: "Madonna University Okija",
    duration: "09/2004 – 10/2008"
  }
];

const awards = [
  {
    award: "Henley Enterpreneurship Award",
    institution: "Henley Business School",
    date: "08/12/2023"
  },
  {
    award: "TETFUND Research Grant",
    institution: "TETFUND",
    date: "2022"
  },
  {
    award: "Rising Star in Design",
    institution: "Creative Industry Forum",
    date: "2021"
  }
]

const interests = [
  "Design Systems & Accessibility",
  "AI & Machine Learning in Design",
  "Sustainable Design Practices",
  "Photography & Visual Arts",
  "Travel & Cultural Exploration",
  "Mentoring Young Designers",
]


const About = () => {
  return (
    <section
      id="homehero"
      className="min-h-screen w-full px-4 flex flex-col md:px-10 xl:px-12 space-y-24 items-center py-10 md:pt-48"
    >
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div className="flex-1 space-y-6">
          <p className="text-semantic-heading1 leading-10 md:text-7xl text-2xl text-[#FAFAFA]">
            About<span className="text-[#00C3D0] pl-2">Ugochi</span>
          </p>

          <p className="text-semantic-heading2 text-5xl max-w-xl leading-12 text-[#FAFAFA] ">
            Crafting Digital Experiences with Purpose
          </p>

          <div className='text-[#A1A1AA] space-y-5 text-xl leading-7 max-w-2xl font-normal text-inter-regular'>
            <p>
              With over 6 years of experience in product design, I specialize in creating
              user-centered digital solutions that bridge the gap between business
              objectives and human needs. My approach combines strategic thinking
              with creative problem-solving to deliver products that truly resonate with
              users.
            </p>
            <p>
              I believe that great design is invisible – it seamlessly guides users toward
              their goals while creating delightful experiences along the way. Every
              project I undertake is an opportunity to solve complex problems through
              thoughtful design and rigorous user research.
            </p>
          </div>

          <div className='text-[#A1A1AA] leading-6 text-inter-regular flex flex-row gap-3'>
            <span className='flex flex-row gap-2'>
              <img src={Location} alt="my-location" />
              <p>Lagos, Nigeria</p>
            </span>
            <span className='flex flex-row gap-2'>
              <img src={TechFlow} alt="" />
              <p>TechFlow Solutions</p>
            </span>
          </div>
        </div>

       
        {/* <div className="relative flex-shrink-0 rounded-xl overflow-hidden">
          <img src={about} alt="Profile" className="rounded-2xl w-100 h-95 object-contain" /> */}
          <div className="relative flex-shrink-0 rounded-xl overflow-hidden w-full md:w-[400px]">
          <img
            src={about}
            alt="Profile"
            className="rounded-2xl w-full h-full object-cover"
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

    
      <div className='flex flex-col space-y-16 text-center'>
        <div className='flex flex-col space-y-6'>
          <p className="font-medium playfair-text-semantic-heading2 text-5xl leading-12 text-[#FAFAFA]">
            Professional Experience
          </p>
          <p className="text-xl leading-7 text-[#A1A1AA] max-w-2xl mx-auto">
            A journey through impactful roles that shaped my expertise in product design and user experience.
          </p>
        </div>

       
        <div className="grid grid-cols-1 max-w-7xl gap-10 w-full mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col text-center items-center p-4 md:p-8 bg-[#1F1F1F] border border-[#EBEBEB80] rounded-2xl gap-4">
              <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
                
                <div className="flex flex-col items-start space-y-2">
                  <p className="Text-playfair-display-semiBold text-2xl leading-8 text-[#FAFAFA]">{exp.role}</p>
                  <img src={exp.logo} alt="company-logo" className="h-8" />
                  <div className="flex flex-col text-[#D9D9D9] text-[16px] leading-6">
                    <span className="flex flex-row gap-2 items-center">
                      <CiCalendar className="text-[#008080]" />
                      <p>{exp.duration}</p>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                      <CiLocationOn className="text-[#008080]" />
                      <p>{exp.location}</p>
                    </span>
                  </div>
                </div>

                
                <div className="flex flex-col items-start space-y-2 max-w-2xl text-left">
                  {exp.description && (
                    <p className="text-[#D9D9D9] text-[16px] leading-6">{exp.description}</p>
                  )}
                  <p className="text-lg leading-5 Text-playfair-display-semiBold text-[#FAFAFA]">
                    Key Achievements:
                  </p>
                  <ul className="space-y-2 text-[#D9D9D9] text-[16px] leading-6">
                    {exp.achievements.map((achieve, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <TiArrowRight className="text-[#008080] mt-1" />
                        <p>{achieve}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-12 w-full max-w-6xl mx-auto">
        <p className="playfair-text-semantic-heading2 leading-8 text-center text-[#FAFAFA]">
          Education
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-md border border-[#EBEBEB80] bg-[#1F1F1F] p-6 flex flex-col space-y-2 w-full"
            >
              <p className="playfair-text-semantic-heading3 text-lg leading-7 text-[#FAFAFA]">
                {edu.program}
              </p>
              <span className="flex flex-col space-y-1">
                <p className="text-[#00C3D0] text-inter-medium leading-6">
                  {edu.school}
                </p>
                <p className="text-[#D9D9D9] text-sm leading-5 text-inter-regular">
                  {edu.duration}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>

        <div className="flex flex-col space-y-12 w-full max-w-6xl mx-auto">
          <p className="playfair-text-semantic-heading2 leading-8 text-center text-[#FAFAFA]">
            Awards & Recognition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full ">
            {awards.map((awrd, idx) => (
              <div
                key={idx}
                className="rounded-md border border-[#EBEBEB80] bg-[#1F1F1F] text-center p-6 flex flex-col space-y-2 w-full"
              >
                <p className="playfair-text-semantic-heading3 text-lg leading-7 text-[#FAFAFA]">
                  {awrd.award}
                </p>
                <span className="flex flex-col space-y-1">
                  <p className="text-[#00C3D0] text-inter-medium leading-6">
                    {awrd.institution}
                  </p>
                  <p className="text-[#D9D9D9] text-sm leading-5 text-inter-regular">
                    {awrd.date}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col space-y-12 max-w-6xl text-center w-full'>
          <div className='flex flex-col space-y-6'>
            <p className="playfair-text-semantic-heading2 leading-8 text-center text-[#FAFAFA]">
              Professional Experience
            </p>
            <p className="text-[#A1A1AA] text-inter-regular text-lg leading-5 max-w-2xl mx-auto">
              Beyond design, I'm passionate about continuous learning and giving back to
              the design community.
            </p>

            <div className="mt-8">
              <div className="flex flex-wrap gap-4 lg:grid-rows-3 md:grid-rows-2 xl:grid-rows-2 grid-rows-1">
                {interests.map((Interest, idx) => (
                  <div
                    key={idx}
                    className="text-inter-medium flex items-center text-sm h-14 w-md leading-6 bg-[#1F1F1F80] justify-start p-4 rounded-sm border-2 border-[#33333380] text-[#FAFAFA]"
                  >
                    {Interest}
                  </div>
                ))}
              </div>
            </div>

            <div className='md:py-30 py-10'>
              <hr className="md:w-md w-full border border-[#333333] rounded mx-auto" />
            </div>

            <FooterCTASection
              title="Let's Create Something Amazing Together"
              description="I'm always excited to work on new projects and collaborate with like-minded individuals and teams."
              primaryText="Get In Touch"
              secondaryText="View My Work"
              secondaryLink="/projects"
            />
          </div>
        </div>

    </section>
  );
};

export default About;
