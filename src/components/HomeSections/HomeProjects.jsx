import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import meedl from '../../assets/Meedl.png'
import signalHub from '../../assets/signalHub.png'

const projects = [
  {
    title: "SIGNAL HUB",
    image: signalHub,
    role: "Lead Product Manager",
    duration: "6 months",
    team: "Cross-functional team of 8",
    problem: "Enterprise teams struggled with complex data analysis and actionable insights.",
    solution: "Built an intuitive AI-powered platform that democratizes data analytics for non-technical users.",
    keyMetrics: [
      "50K+ users in first month",
      "+30% team efficiency",
      "85% adoption in 3 months",
      "Reduced churn by 20%"
    ],
    resources: [
      { name: "PRD", url: "https://docs.google.com/document/d/1Tx2XBmmKK9BlWeWVi_XUHSawfPjOsEYm4ZOnWb1GNQo/edit" },
      { name: "User Flow", url: "https://whimsical.com/signalhub-userflow-PE7Ataa7JMSWes7wDMPGAX" },
      { name: "Model", url: "https://docs.google.com/presentation/d/18oxS6OfVN9IPnYv1Hl6geudzXJq14PQy/edit" },
      // { name: "Business Case", url: "https://docs.google.com/document/d/1Tszt9Ck5dzFXyFZNhmU1SuQQKVMPZZuTaYTrhGFMCxs/edit" }
    ],
    // techStack: ["React", "Python", "TensorFlow", "AWS"],
    link: "https://studio--studio-4626559585-22018.us-central1.hosted.app/",
    buisnessCase: "https://docs.google.com/document/d/1Tszt9Ck5dzFXyFZNhmU1SuQQKVMPZZuTaYTrhGFMCxs/edit?usp=sharing"
  },
  {
    title: "MEEDL",
    image: meedl,
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
    resources: [
      { name: "PRD", url: "https://docs.google.com/document/d/1Tx2XBmmKK9BlWeWVi_XUHSawfPjOsEYm4ZOnWb1GNQo/edit" },
      { name: "User Flow", url: "https://whimsical.com/signalhub-userflow-PE7Ataa7JMSWes7wDMPGAX" },
      { name: "Model", url: "https://docs.google.com/presentation/d/18oxS6OfVN9IPnYv1Hl6geudzXJq14PQy/edit" },
      // { name: "Business Case", url: "https://docs.google.com/document/d/1Tszt9Ck5dzFXyFZNhmU1SuQQKVMPZZuTaYTrhGFMCxs/edit" }
    ],
    link: "https://meedl.africa/",
    buisnessCase: ""
  },
];

const HomeProjects = () => {
  return (
    <section id="homeprojects" className="min-h-screen px-4 md:px-16 lg:px-24 xl:px-72 2xl:px-14 flex flex-col items-center space-y-7">
      <hr className="w-24 border-3 border-[#009999] rounded mx-auto" />

      <p className="text-semantic-heading2 md:text-5xl leading-12 font-medium text-2xl tracking-normal text-center text-[#FAFAFA]">
        Featured Projects
      </p>

      <p className="text-center text-[#FAFAFA] max-w-3xl text-xl leading-7">
        A showcase of products I've built that solve real problems and create meaningful impact for users and businesses.
      </p>

      {/*{projects.map((project, idx) => (*/}
      {/*  <div key={idx} className="flex flex-row bg-[#1F1F1F] w-full max-w-6xl rounded-3xl border border-[#EBEBEB80] overflow-hidden">*/}
      {/*    <div className="hidden md:block w-1/2">*/}
      {/*      <img src={featureProjects} alt={project.title} className="w-full h-full object-cover" />*/}
      {/*    </div>*/}

      {/*    <div className="w-full md:w-1/2 pl-8 text-[#00C3D0] bg-[#1F1F1F] p-5 flex flex-col justify-start space-y-2">*/}
      {/*      <p className="Text-playfair-display-semiBold text-2xl leading-8 text-[#FAFAFA] font-inter font-medium">{project.title}</p>*/}
      {/*      <p className="text-[#00CCCC] text-sm leading-6 font-playfair ">{project.role}</p>*/}

      {/*      <div className="text-inter-regular text-sm leading-5 text-[#D9D9D9] flex flex-row justify-between px-6">*/}
      {/*        <p>{project.duration}</p>*/}
      {/*        <p>{project.team}</p>*/}
      {/*      </div>*/}

      {/*      <div className="flex flex-col space-y-2">*/}
      {/*        <p className="Text-playfair-display-semiBold text-sm leading-6 text-[#FAFAFA]">Problem</p>*/}
      {/*        <p className="text-inter-regular text-sm leading-5 text-[#D9D9D9] ">{project.problem}</p>*/}

      {/*        <p className="Text-playfair-display-semiBold text-sm leading-6 text-[#FAFAFA]">Solution</p>*/}
      {/*        <p className="text-[#D9D9D9] text-inter-regular text-sm leading-5 ">{project.solution}</p>*/}
      {/*      </div>*/}

      {/*      <p className="Text-playfair-display-semiBold text-sm leading-6 text-[#FAFAFA]">Key Metrics</p>*/}
      {/*      <div className="grid grid-cols-2 gap-2">*/}
      {/*        {project.keyMetrics.map((metric, i) => (*/}
      {/*          <div key={i} className="text-inter-regular text-sm leading-5 text-[#D9D9D9] bg-[#26262680] p-2 font-inter">{metric}</div>*/}
      {/*        ))}*/}
      {/*      </div>*/}

      {/*      <p className="text-[#FAFAFA] font-inter  Text-playfair-display-semiBold text-sm leading-6">Tech Stack</p>*/}
      {/*      <div className="flex flex-wrap gap-2">*/}
      {/*        {project.techStack.map((tech, i) => (*/}
      {/*          <div key={i} className="py-0.5 px-2.5 w-fit text-inter-semibold text-[12px] leading-4 whitespace-nowrap rounded-full border-2 border-[#333333] text-[#FAFAFA] font-inter font-semibold">*/}
      {/*            {tech}*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </div>*/}

      {/*      <div className="text-inter-medium text-sm leading-5 flex flex-col md:flex-row space-x-4">*/}
      {/*        <div className="inline-flex items-center w-fit whitespace-nowrap rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3 gap-2 cursor-pointer">*/}
      {/*          <MdOutlineRemoveRedEye />*/}
      {/*          <Link to="/">View Case Study</Link>*/}
      {/*        </div>*/}

      {/*        <div className="inline-flex items-center w-fit whitespace-nowrap rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3 gap-2 cursor-pointer">*/}
      {/*          <FaExternalLinkAlt />*/}
      {/*          <Link to="/">Live Demo</Link>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*))}*/}

      <div className="flex flex-col max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, idx) => (
              <div
                  key={idx}
                  className="flex flex-col bg-[#1F1F1F] rounded-2xl border border-[#EBEBEB80] overflow-hidden"
              >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover cursor-pointer"
                    onClick={() =>
                        window.open(
                            project.model,
                            "_blank"
                        )
                    }
                />

                <div className="w-full py-2 px-6 flex flex-col space-y-2">
                  <p className="Text-playfair-display-semiBold text-2xl leading-8 text-[#FAFAFA] font-medium">
                    {project.title}
                  </p>

                  <p className="text-sm leading-6 font-playfair text-[#00CCCC]">
                    {project.role}
                  </p>

                  {/*<div className="flex justify-between text-inter-regular text-sm leading-5 text-[#D9D9D9]">*/}
                  {/*  <p>{project.duration}</p>*/}
                  {/*  <p>{project.team}</p>*/}
                  {/*</div>*/}

                  {/*<div className="">*/}
                  {/*  <p className="Text-playfair-display-semiBold text-sm font-semibold text-[#FAFAFA]">*/}
                  {/*    Description*/}
                  {/*  </p>*/}
                  {/*  <p className="text-sm text-[#D9D9D9] leading-5">*/}
                  {/*    {project.problem}*/}
                  {/*  </p>*/}
                  {/*</div>*/}

                  <div>
                    {/*<p className="text-sm Text-playfair-display-semiBold text-[#FAFAFA] ">*/}
                    {/*  Technology*/}
                    {/*</p>*/}

                    {/*<div className="flex flex-wrap gap-2">*/}
                    {/*  {project.techStack.map((tech, i) => (*/}
                    {/*      <div*/}
                    {/*          key={i}*/}
                    {/*          className="py-0.5 px-2.5 text-sm rounded-full border-2 border-[#333333] text-[#FAFAFA] font-semibold"*/}
                    {/*      >*/}
                    {/*        {tech}*/}
                    {/*      </div>*/}
                    {/*  ))}*/}
                    {/*</div>*/}
                    <div className="flex flex-wrap gap-2">
                      {project.resources?.map((item, i) => (
                          <button
                              key={i}
                              onClick={() => window.open(item.url, "_blank")}
                              className="py-1 px-3 text-sm cursor-pointer rounded-full border border-[#333333] text-[#FAFAFA] font-semibold hover:bg-[#009999] transition duration-300"
                          >
                            {item.name}
                          </button>
                      ))}
                    </div>

                  </div>

                  <div className="flex flex-row gap-3 ">
                    {/*{project.role === "Project" && (*/}
                        <Link
                            to={project.buisnessCase}
                            className="inline-flex items-center gap-2 rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
                        >
                          <MdOutlineRemoveRedEye /> View Case Study
                        </Link>
                    {/*)}*/}
                    <Link
                        to={project.link}
                        className="inline-flex items-center gap-2 rounded-md  w-fit bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
                    >
                      <FaExternalLinkAlt /> View
                    </Link>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <Link to="/projects">
          <p className="playfair-text-semantic-heading2 pt-6 md:text-3xl text-2xl leading-8 text-[#FAFAFA] hover:text-[#00C3D0] transition duration-300 cursor-pointer">
            Click to see more Projects
          </p>
        </Link>
        {/*<p className='playfair-text-semantic-heading2 md:text-3xl text-2xl leading-8 text-[#FAFAFA]'>More Projects</p>*/}
      </div>
    </section>
  )
}

export default HomeProjects;
