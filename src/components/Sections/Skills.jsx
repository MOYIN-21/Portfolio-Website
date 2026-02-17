import React from "react";
import Leadership from "../../assets/Leadership.svg";
import Strategy from "../../assets/Strategy.svg";
import Technical from "../../assets/Technical.svg";
import Analytics from "../../assets/AnalyticsAndData.svg";
import { GoLightBulb } from "react-icons/go";
import { BiComment } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi"; 
import { LuLightbulb } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import interviews from '../../assets/Interviews.png'
import FooterCTASection from "../reusables/FooterCTASection";

const skills = [
  {
    icon: Strategy,
    title: "Product Strategy",
    items: [
      "Product Roadmapping",
      "Market Research",
      "Competitive Analysis",
      "Go-to-Market Strategy",
      "Product-Market Fit",
      "Pricing Strategy",
    ],
  },
  {
    icon: Analytics,
    title: "Analytics & Data",
    items: ["Google Analytics", "Mixpanel", "Amplitude", "Posthug", "SQL", "A/B Testing"],
  },
  {
    icon: Technical,
    title: "Technical",
  items: ["React/HTML/CSS", "Java/Phyton/Javascript","Third Party Integration", "API Testing", "Vibe Coding/Prompt Engineering", "AI & Automation"],  },
  {
    icon: Leadership,
    title: "Leadership",
     items: [
      "Team Management",
      "Stakeholder Management",
      "Agile and Scrum Ceremonies",
            "Communication",
      "Mentoring",
      "Conflict Resolution",
    ],
  },
];

const passions = [
  "Design Thinking",
  "AI & Machine Learning",
  "Sustainable Technology",
  "Mentoring",
  "Travel Photography",
  "Yoga & Mindfulness",
];

const tools = [
  { name: "Confluence/Notion", category: "Documentation" },
  { name: "Slack/Zoom/Teams", category: "Communication" },
  { name: "Miro", category: "Draw.io" },
  { name: "Asana", category: "Project Management" },
  { name: "Trello", category: "Project Management" },
  { name: "GitHub", category: "Development" },
    { name: "Jira&Linear", category: "Backlog Mgt" },
  { name: "Swagger/Potman", category: "Api Testing" },
  { name: "Lovable", category: "Prototyping" },
  { name: "Survey Math", category: "User researcher" },
  { name: "Cursor/VsCode", category: "Development" },
  { name: "Figma", category: "Design" },
    { name: "Survey Math", category: "User Research" },
  // { name: "AWS", category: "Cloud" },
  // { name: "Docker", category: "Development" },
  { name: "Postman", category: "API Testing" },
  { name: "Hotjar", category: "User Insights" },
  // { name: "Intercom", category: "Customer Support" },
  { name: "Stripe", category: "Payments" },
];

 const cards = [
   {
      icon: <img src={Strategy} alt="Strategy" className="w-8 h-8 mx-auto mb-2" />,
      title: 'Design Systems Expert',
      description: 'Built and maintained design systems for 5+ organizations',
      number: '5+ Systems'
    },
      {
      icon: <img src={interviews} alt="Leadership" className="w-8 h-8 mx-auto mb-2" />,
      title: 'User Research Champion',
      description: 'Conducted 200+ user interviews and usability tests',
      number: '200+ Interviews'
    },
    {
      icon: <LuLightbulb className="text-[#00C3D0] text-3xl" />,
      title: 'Cross-Platform Designer',
      description: 'Designed for web, mobile, and emerging technologies',
      number: '15+ Platforms'
    },
    {
      icon: <img src={Leadership} alt="Impact" className="w-8 h-8 mx-auto mb-2" />,
      title: 'Team Leadership',
      description: 'Led design teams and mentored junior designers',
      number: '10+ Mentees'
    },
  ];

const Skills = () => {
  return (
    <section
      id="homeabout"
      className="min-h-screen px-4 md:px-16 lg:px-24 flex flex-col items-center space-y-20 py-10 pt-30"
    >
      <hr className="w-24 border-3 border-[#009999] rounded mx-auto " />
       <div className="flex flex-col text-center space-y-5">
         <p className="text-semantic-heading1 leading-10 md:text-7xl text-2xl text-[#FAFAFA]">
        Skills & Expertise
      </p>
      <p className="text-center text-[#FAFAFA] max-w-3xl text-xl leading-7">
        A comprehensive toolkit built through years of hands-on experience in product
        management across diverse industries and technologies.
      </p>
       </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-[#EBEBEB80] bg-[#1F1F1F] rounded-lg p-6 sm:p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={skill.icon} alt={skill.title} className="w-6 h-6"/>
              <h2 className="Text-playfair-display-semiBold text-xl leading-7 text-[#FAFAFA]">
                {skill.title}
              </h2>
            </div>

            <ul className="text-inter-regular text-sm leading-6 list-disc list-inside marker:text-[#00C3D0] text-[#D9D9D9] font-inter text-left space-y-1">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>


      <div className="flex flex-col mt-10 bg-[#1F1F1F] w-full max-w-6xl px-4 md:p-12 py-8 rounded-2xl gap-4">
        <p className="playfair-text-semantic-heading3 text-2xl leading-8 text-center text-[#FAFAFA]">
          Tools & Technologies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="py-3 px-4 text-center rounded-md border border-[#EBEBEB80]"
            >
              <p className="text-inter-medium text-lg leading-7 font-medium text-[#FAFAFA]">{tool.name}</p>
              <p className="text-inter-regular text-[#737373] text-sm leading-5">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>

        <div className="flex flex-col">
          <span className="flex flex-row items-center mx-auto text-center gap-2">
            <CiStar className="text-[#00CCCC] h-6 w-6"/>
            <p className="playfair-text-semantic-heading3 text-2xl leading-8 text-center text-[#FAFAFA]">Key Achievements</p>
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
          {cards.map((card, index) => (
            <div key={index} className="border border-[#EBEBEB80] bg-[#1F1F1F] rounded-lg p-6 text-center">
              <div className="flex justify-center">{card.icon}</div>
              <p className="text-[#FAFAFA] mt-2 Text-playfair-display-semiBold text-xl leading-7">{card.title}</p>
              <p className="text-[#D9D9D9] pt-3 text-inter-regular text-sm leading-6">{card.description}</p>
              <p className="text-2xl leading-8 text-[#00CCCC] text-inter-bold pt-3"> {card.number}</p>
            </div>
          ))}
        </div>
        </div>


       <div className="md:mt-10 mt-5 justify-center flex flex-col max-w-4xl md:py-30 py-10">
          <div className="flex flex-row gap-8 justify-center mb-4 ">
            <GoLightBulb className="text-[#00C3D0] w-8 h-8 font-bold"/>
            <BiComment className="text-[#00C3D0] w-8 h-8 font-bold"/>
            <FiGlobe className="text-[#00C3D0] w-8 h-8 font-bold"/>
          </div>
            <p className="text-inter-regular text-xl leading-8 text-center text-[#FAFAFA]">
            I believe in the power of 
            <span className=" text-[#00C3D0]"> continuous learning, data-driven decisions,</span>{" "}
            and 
            <span className=" text-[#00C3D0]"> human-centered</span>{" "}
            <span className=" text-[#00C3D0]">design. </span>{" "}
            Every product should solve a real problem while creating delightful experiences.
          </p>
        </div>

        <FooterCTASection
          title="Let's Build Something Great Together"
          description="Ready to leverage these skills for your next project? I'd love to discuss how we can create exceptional user experiences together."
          primaryText="Start a Conversation"
          primaryLink="/contact"
          secondaryText="See My Work"
          secondaryLink="/projects"
        />
    </section>
  );
};

export default Skills;
