import React from 'react'
import { Link } from 'react-router-dom';
import Article1 from '../../assets/Article1.svg'
import Article2 from '../../assets/Article2.svg'
import { TiArrowRight } from "react-icons/ti";
import { FaComment } from "react-icons/fa";
import LatestArticle1 from '../../assets/LatestAriticle 1.svg';
import LatestArticle2 from '../../assets/LatestArticle 2.svg';
import LatestArticle3 from '../../assets/LatestArticle 3.svg';
import LatestArticle4 from '../../assets/LatestArticle 4.svg';
import LatestArticle5 from '../../assets/LatestArticle 5.svg';
import { IoBookOutline } from "react-icons/io5";
import FooterCTASection from '../reusables/FooterCTASection';
import { FiShare2 } from "react-icons/fi";
import Love from '../../assets/whiteLove.svg'


const Blog = () => {

  const blogTypes = ["All", "Product Strategy", "Leadership", "UX Research", "StartUp Life", "Communication", "Product Analytics", "Collaboration", "Sustainability"]

  const projects = [
  {
    image: Article1,
    title: "The Future of Product Managemant: AI and Human Centered Design",
    description: "Exploring how artificial intelligence is reshaping product development while keeping human needs at the center of innovation.",
    date: "January 15, 2024",
    read: "8 min read",
    engagemnt1: "60",
    engagemnt2 : "28" 
  },
  {
    image: Article2,
    title: "Building Cross-Functional Teams That Actually Work",
    description: "Lessons learned from leading diverse teams across multiple successful product launches and scaling.",
    date: "January 10, 2024",
    read: "6 min read",
    engagemnt1: "98",
    engagemnt2 : "15" 
  },
  {
    image: LatestArticle1,
    title: "User Research That Drives Real Product Decisions",
    description: "A practical guide to conducting user research that goes beyond surface insights to drive meaningful product.",
    date: "January 5, 2024",
    read: "7 min read",
    engagemnt1: "76",
    engagemnt2 : "12" 
  },
  {
    image: LatestArticle2,
    title: "From Startup to Scale: Product Lessons Learned",
    description: "Lessons learned from leading diverse teams across multiple successful product launches and scaling.",
    date: "December 20, 2023",
    read: "5 min read",
    engagemnt1: "124",
    engagemnt2 : "31" 
  },
  {
    image: LatestArticle3,
    title: "The Art of Stakeholder Communication in Product",
    description: "How to effectively communicate product strategy, roadmaps, and decisions across different.",
    date: "December 20, 2023",
    read: "9 min read",
    engagemnt1: "89",
    engagemnt2 : "18" 
  },
  {
    image: LatestArticle4,
    title: "Metrics That Matter: Beyond Vanity Numbers",
    description: "Identifying and tracking the metrics that actually indicate product health and user satisfaction.",
    date: "Dcemeber 18, 2023",
    read: "6 min read",
    engagemnt1: "92",
    engagemnt2 : "25" 
  },
   {
    image: LatestArticle5,
    title: "Sustainable Design: Creating Products for the Future.",
    description: "How to design digital products with sustainability in mind, considering environmental impact and long-term user value.",
    date: "Dcemeber 18, 2023",
    read: "6 min read",
    engagemnt1: "64",
    engagemnt2 : "14" 
  },
]

const HandleSubscription = ()=>{

}

  return (
  <section
      id="homeabout"
      className="min-h-screen px-4 md:px-16 lg:px-24 flex flex-col items-center space-y-20 py-10 pt-30"
    >
       <div className="flex flex-col text-center space-y-5">
         <p className="text-semantic-heading1 leading-10 md:text-7xl text-2xl text-[#00CCCC]">
          Blogs
        </p>
         <p className="text-center text-[#FAFAFA] max-w-3xl text-xl leading-7">
        Sharing lessons learned, industry insights, and thoughts on building great
        products that solve real problems and create meaningful impact.
      </p>
      </div>

      <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9  place-items-center
'     >
        {blogTypes.map((types, idx)=>(
          <div key={idx} className="text-inter-medium text-sm leading-5 text-center py-0.5 px-2.5 rounded-sm border-2 border-[#333333] text-[#FAFAFA]"> {types}
          </div>
        ))}
      </div>

        <div className='flex flex-col space-y-12 md:pt-20'>
          <span className="flex flex-row gap-3 items-center">
            <IoBookOutline className='text-[#00CCCC]  w-7 h-6'/>
            <p className='playfair-text-semantic-heading2 md:text-5xl text-2xl leading-12 text-[#FAFAFA]'>Featured Articles</p>
          </span>
          <div className='space-y-12'>
            {projects.slice(0, 2).map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-[#1F1F1F] w-full max-w-7xl rounded-3xl border border-[#EBEBEB80] overflow-hidden"
            >
              
              <div className="hidden md:block w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col space-y-4">
              <div className="flex text-inter-regular text-sm leading-5 justify-between text-[#D9D9D9]">
                  <p>{project.date}</p>
                  <p>{project.read}</p>
                </div>
                <p className="Text-playfair-display-semiBold text-2xl leading-8 text-[#FAFAFA] font-medium">{project.title}</p>

                <div className="space-y-2">
                  <p className="text-sm text-inter-regular leading-6 text-[#D9D9D9]">{project.description}</p>
                </div>

                <div className="text-inter-medium text-center flex flex-row text-sm leading-5 justify-between sm:flex-row gap-3 pt-4">
                  <div className="flex flex-row gap-5">
                    <span className="flex flex-row gap-2">
                    <FaComment />
                    <p>{project.engagemnt1}</p>
                    </span>

                    <span className="flex flex-row gap-2">
                    <FaComment />
                    <p>{project.engagemnt2}</p>
                    </span>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
                  >
                    <p className='text-[#008080]'>Read More</p> 
                    <TiArrowRight className="text-[#008080] mt-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col max-w-7xl space-y-12'>
          <p className='playfair-text-semantic-heading2 md:text-3xl text-2xl leading-8 text-[#FAFAFA]'>Latest Articles</p>
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
                  <div className="flex text-inter-regular text-sm leading-5 justify-between text-[#D9D9D9]">
              <p>{project.date}</p>
              <p>{project.read}</p>
            </div>
            <p className="Text-playfair-display-semiBold text-2xl leading-8 text-[#FAFAFA] font-medium">{project.title}</p>

            <div className="space-y-2">
              <p className="text-sm text-inter-regular leading-5 text-[#D9D9D9]">{project.description}</p>
            </div>

            <div className="text-inter-medium flex text-center flex-row text-sm leading-5 justify-between gap-3 pt-4">
              <div className="flex flex-row gap-5">
                <span className="flex flex-row gap-2">
                <img src={Love} alt="love-icon" className='w-4 h-6' />
                <p>{project.engagemnt1}</p>
                </span>

                <span className="flex flex-row gap-2">
                <FaComment className='w-4 h-4' />
                <p>{project.engagemnt2}</p>
                </span>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
              >
                <p className='text-[#008080]'>Read More</p> 
                <TiArrowRight className="text-[#008080] mt-1" />
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    </div>
     <div className="flex flex-col text-center items-center py-6 md:py-8 px-4 md:px-8 mt-10 bg-[#1F1F1F] border border-[#EBEBEB80]     w-full max-w-7xl rounded-2xl gap-4">
          <p className="Text-playfair-display-semiBold md:text-2xl leading-8 text-[#FAFAFA]">
            Stay Updated with Design Insights
          </p>
          <p className="text-inter-regular text-sm leading-6 text-[#D9D9D9] max-w-xl">
            Get the latest articles, design tips, and industry insights delivered directly to your inbox.
            Join 2,000+ designers who read my weekly newsletter.
          </p>

          <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#333333] text-inter-regular placeholder:text-inter-regular outline-none placeholder:text-[#D9D9D9] text-[#D9D9D9] py-2.5 px-4 w-full md:w-80 h-14 rounded-md"
            />
            <button onClick={HandleSubscription} className="bg-[#141414] text-inter-medium text-sm leading-5 text-[#FAFAFA] px-4 py-2.5 h-14 rounded-md w-full md:w-auto cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

          <div className="w-full text-[#00C3D0] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <span>
              <p className="playfair-text-semantic-heading3 text-3xl leading-9">50+</p>
              <p className="text-[#FAFAFA] text-inter-regular text-sm leading-6">Articles Published</p>
            </span>

            <span>
              <p className="playfair-text-semantic-heading3 text-3xl leading-9">25k+</p>
              <p className="text-[#FAFAFA] text-inter-regular text-sm leading-6">Monthly Readers</p>
            </span>

            <span>
              <p className="playfair-text-semantic-heading3 text-3xl leading-9">500+</p>
              <p className="text-[#FAFAFA] text-inter-regular text-sm leading-6">Newsletter Subscribers</p>
            </span>

            <span>
              <p className="playfair-text-semantic-heading3 text-3xl leading-9">20+</p>
              <p className="text-[#FAFAFA] text-inter-regular text-sm leading-6">Design Topics Covered</p>
            </span>
          </div>

        <FooterCTASection
          title="Want to Collaborate on an Article?"
          description="I'm always interested in writing guest posts, participating in podcasts, or collaborating on design-related content."
          primaryText="Get In Touch"
          secondaryText="Share This Blog"
          secondaryLink="/about"
           icon={<FiShare2 />}
        />
  </section>
  )
}

export default Blog
