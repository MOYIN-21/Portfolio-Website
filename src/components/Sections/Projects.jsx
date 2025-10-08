import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import featureProjects from '../../assets/featureProjects.svg';
import GreenCity from "../../assets/GreenCity.svg";
import FinanceFlow from "../../assets/FinanceFlow.svg";
import LearnLab from "../../assets/LearnLab.svg";
import TravelMate from "../../assets/TravelMate.svg";
import FooterCTASection from '../reusables/FooterCTASection'

const projects = [
  {
    title: "AI Analytics Platform",
    role: "Lead Product Manager",
    duration: "6 months",
    team: "Cross-functional team of 8",
    problem: "Enterprise teams struggled with complex data analysis and actionable insights.",
    solution: "Built an intuitive AI-powered platform that democratizes data analytics for non-technical users.",
    keyMetrics: [
      "50K+ users in first month",
      "40% reduction in cart abandonment",
      "85% user satisfaction score",
      "300% increase in organic traffic"
    ],
    techStack: ["React", "Python", "TensorFlow", "AWS"]
  },
  {
    title: "Mobile Banking App",
    role: "Product Manager",
    duration: "6 months",
    team: "Cross-functional team of 8",
    problem: "Traditional banking was slow, complex, and didn't meet modern user expectations.",
    solution: "Designed a seamless mobile-first banking experience with biometric security and real-time transactions.",
    keyMetrics: [
      "50K+ users in first month",
      "40% reduction in cart abandonment",
      "85% user satisfaction score",
      "300% increase in organic traffic"
    ],
    techStack: ["React Native", "Blockchain", "Node.js", "AWS"]
  },
  {
    image: FinanceFlow,
    title: "FinanceFlow Dashboard",
    role: "Product Manager",
    duration: "4 months",
    team: "FinTech startup team",
    problem: "Small business owners needed better tools to track expenses, manage invoices, and understand their financial health.",
    solution: "Designed a comprehensive financial dashboard with real-time analytics, automated expense categorization, and cash flow predictions.",
    keyMetrics: [
      "1000+ small businesses using platform",
      "90% improved financial visibility",
      "45% reduction in manual bookkeeping",
      "99.9% uptime achieved"
    ],
    techStack: ["Vue.js", "D3.js", "FastAPI", "PostgreSQL"]
  },
  {
    image: LearnLab,
    title: "LearnLab Education Platform",
    role: "UX/UI Designer",
    duration: "5 months",
    team: "Education technology specialists",
    problem: "Online learning platforms lacked engagement and personalized learning paths for different learning styles.",
    solution: "Designed an adaptive learning platform with AI-powered personalization, interactive content, and progress tracking.",
    keyMetrics: [
      "40% improvement in learning outcomes",
      "25% increase in course completion",
      "15% active student",
      "95% instructor satisfaction"
    ],
    techStack: ["Angular", "TensorFlow", "Python", "Django", "Redis"]
  },
  {
    image: TravelMate,
    title: "TravelMate Social Platform",
    role: "Lead Designer",
    duration: "7 months",
    team: "International development team",
    problem: "Travelers wanted to connect with locals and other travelers but existing platforms were fragmented and unsafe.",
    solution: "Created a social travel platform with verified user profiles, local guide matching, and trip planning collaboration tools",
    keyMetrics: [
      "25K+ travelers connected",
      "500+ local experiences facilitated",
      "15 countries expansion",
      "4.7/5 user safety rating"
    ],
    techStack: ["React", "GraphQL", "Node.js", "MongoDB", "AWS"]
  },
  {
    image: GreenCity,
    title: "GreenCity IoT Dashboard",
    role: "Senior Product Designer",
    duration: "9 months",
    team: "Smart city initiative team",
    problem: "City planners needed better tools to monitor environmental data and make informed decisions about urban sustainability.",
    solution: "Designed an IoT data visualization dashboard for monitoring air quality, traffic patterns, and energy consumption across the city.",
    keyMetrics: [
      "3 cities implementation",
      "",
      "35% improvement in planning efficiency",
      "100+ data points monitored"
    ],
    techStack: ["React", "D3.js", "InfluxDB", "Node.js", "Docker"]
  },
  
];

const Projects = () => {
  return (
    <section
      id="homeprojects"
      className="min-h-screen px-4 flex flex-col space-y-24 items-center py-10 pt-30"
    >
      <div className='pt-8'>
        <p className="text-3xl text-semantic-heading1 md:text-7xl leading-16 text-center text-[#FAFAFA] pt-10">
              Featured <span className="text-[#00C3D0]">Projects</span>
            </p>

            <p className="text-center pt-6 text-inter-regular text-xl leading-8 text-[#FAFAFA] max-w-2xl md:text-xl">
              A collection of impactful digital experiences I've designed, from
              concept to launch, solving real-world problems for users and businesses.
            </p>
      </div>
          
     <div className='flex flex-col space-y-12 md:pt-20'>
      <p className='playfair-text-semantic-heading2 md:text-5xl text-2xl leading-12 text-[#FAFAFA]'>Featured Work</p>
      <div className='space-y-12'>
         {projects.slice(0, 2).map((project, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row bg-[#1F1F1F] w-full max-w-7xl rounded-3xl border border-[#EBEBEB80] overflow-hidden"
        >
          
          <div className="hidden md:block w-1/2">
            <img
              src={featureProjects}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-6 flex flex-col space-y-4">
            <p className="Text-playfair-display-semiBold text-2xl leading-8 text-[#FAFAFA] font-medium">{project.title}</p>
            <p className="text-sm leading-6 font-playfair text-[#00CCCC]">{project.role}</p>

            <div className="flex text-inter-regular text-sm leading-5 justify-between text-[#D9D9D9]">
              <p>{project.duration}</p>
              <p>{project.team}</p>
            </div>

            <div className="space-y-2">
              <p className="Text-playfair-display-semiBold text-sm leading-6 text-[#FAFAFA]">Problem</p>
              <p className="text-sm text-inter-regular leading-5 text-[#D9D9D9]">{project.problem}</p>
              <p className="text-sm leading-6  Text-playfair-display-semiBold text-[#FAFAFA]">Solution</p>
              <p className="text-sm text-inter-regular leading-5 text-[#D9D9D9]">{project.solution}</p>
            </div>

            <div>
              <p className="text-sm Text-playfair-display-semiBold leading-6 text-[#FAFAFA] mb-2">Key Metrics</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="text-sm text-inter-regular leading-5 text-[#D9D9D9] bg-[#26262680] p-2 rounded"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm Text-playfair-display-semiBold leading-6 text-[#FAFAFA] mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="py-0.5 px-2.5 w-fit text-inter-semibold text-[12px] leading-4 text-xs rounded-full border-2 border-[#333333] text-[#FAFAFA] font-semibold"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-inter-medium text-sm leading-5 flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
              >
                <MdOutlineRemoveRedEye /> View Case Study
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
              >
                <FaExternalLinkAlt /> Live Demo
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
     </div>

      <div className='flex flex-col max-w-7xl space-y-12'>
        <p className='playfair-text-semantic-heading2 md:text-3xl text-2xl leading-8 text-[#FAFAFA]'>More Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {projects.slice(2).map((project, idx) => (
           <div
          key={idx}
          className="flex flex-col bg-[#1F1F1F] rounded-2xl border border-[#EBEBEB80] overflow-hidden"
        >
          
           <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />

          <div className="w-full  p-6 flex flex-col space-y-4">
            <p className="Text-playfair-display-semiBold text-2xl leading-8 text-[#FAFAFA] font-medium">{project.title}</p>
            <p className="text-sm leading-6 font-playfair text-[#00CCCC] ">{project.role}</p>

            <div className="flex justify-between text-inter-regular text-sm leading-5 text-[#D9D9D9]">
              <p>{project.duration}</p>
              <p>{project.team}</p>
            </div>

            <div className="space-y-2">
              <p className="Text-playfair-display-semiBold text-sm leading-6 font-semibold text-[#FAFAFA]">Problem</p>
              <p className="text-sm text-[#D9D9D9] text-inter-regular leading-5">{project.problem}</p>
              <p className="Text-playfair-display-semiBold text-sm leading-6 font-semibold text-[#FAFAFA]">Solution</p>
              <p className="text-sm text-[#D9D9D9] ext-inter-regular leading-5">{project.solution}</p>
            </div>

            <div>
              <p className="text-sm  Text-playfair-display-semiBold leading-6 font-semibold text-[#FAFAFA] mb-2">Key Metrics</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="text-sm text-inter-regular leading-5 text-[#D9D9D9] bg-[#26262680] p-2 rounded"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm Text-playfair-display-semiBold leading-6 text-[#FAFAFA] mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="Text-playfair-display-semiBold leading-6 py-0.5 px-2.5 w-fit text-sm rounded-full border-2 border-[#333333] text-[#FAFAFA] font-semibold"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex text-inter-medium text-sm leading-5 flex-col sm:flex-row gap-3 pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
              >
                <MdOutlineRemoveRedEye /> View Case Study
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
              >
                <FaExternalLinkAlt /> Live Demo
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>

       <div className="w-full text-semantic-heading1 text-3xl leading-9 text-[#00C3D0] grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <span>
            <p>150K+</p>
            <p className='text-[#FAFAFA] text-inter-regular text-sm leading-6'>Users Impacted</p>
          </span>
          <span>
            <p>15+</p>
            <p className='text-[#FAFAFA] text-inter-regular text-sm leading-6'>Companies Worked With</p>
          </span>
          <span className='flex flex-col space-y-2'>
            <p>98%</p>
            <p className='text-[#FAFAFA] text-inter-regular text-sm leading-6'>Client Satisfaction</p>
          </span>
        </div>
        
        {/* <div className="flex flex-col items-center w-full max-w-2xl px-6 text-center space-y-4">
          <p className='playfair-text-semantic-heading2 leading-8 text-2xl'>?</p>
          <p className="text-inter-regular text-lg leading-6 text-[#D9D9D9]">
            
          </p>
          <div className=' flex flex-row gap-3'>
             <p
                className="inline-flex items-center gap-2 text-inter-medium text-sm leading-6 rounded-md text-[#FAFAFA] py-2.5 px-3"
              >
                 
              </p>
               <Link
                to="/about"
                className="inline-flex items-center gap-2 text-inter-medium text-sm leading-6 rounded-md border border-[#262626] bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
              >
                
              </Link>
          </div>
        </div> */}
        <FooterCTASection
              title="Ready to Start Your Next Project?"
              description="Let's collaborate to create exceptional digital experiences that drive results and delight users."
              primaryText="Start a project"
              secondaryText="Learn More About Me"
              secondaryLink="/about"
            />

    </section>
  )
}

export default Projects;
