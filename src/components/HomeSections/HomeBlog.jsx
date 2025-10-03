import React from "react";
import feature from "../../assets/featured.png";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const blogCategories = [
  "All",
  "Product Strategy",
  "Leadership",
  "UX Research",
  "Startup Life",
  "Communication",
  "Product Analytics",
];

const blogPosts = [
  {
    category: "Leadership",
    title: "Building Cross-Functional Teams That Actually Work",
    description:
      "Lessons learned from leading diverse teams across multiple successful product launches and scaling.",
    date: "08/01/2024",
    readTime: "4 min read",
    link: "/",
  },
  {
    category: "UX Research",
    title: "User Research That Drives Real Product Decisions",
    description:
      "A practical guide to conducting user research that goes beyond surface insights to drive meaningful product.",
    date: "01/01/2024",
    readTime: "8 min read",
    link: "/",
  },
  {
    category: "Startup Life",
    title: "From Startup to Scale: Product Lessons Learned",
    description:
      "Key insights from building products in fast-growing startups and the challenges of scaling product teams.",
    date: "20/12/2024",
    readTime: "5 min read",
    link: "/",
  },
  {
    category: "Communication",
    title: "The Art of Stakeholder Communication in Product",
    description:
      "How to effectively communicate product strategy, roadmaps, and decisions across different teams.",
    date: "10/12/2023",
    readTime: "7 min read",
    link: "/",
  },
  {
    category: "Product Analytics",
    title: "Metrics That Matter: Beyond Vanity Numbers",
    description:
      "Identifying and tracking the metrics that actually indicate product health and user satisfaction.",
    date: "01/12/2023",
    readTime: "6 min read",
    link: "/",
  },
];



const HomeBlog = () => {
  const HandleSubscription = ()=>{

  }
  return (
    <section
      id="homeabout"
      className="min-h-screen px-4 md:px-16 lg:px-24 xl:px-72 2xl:72 flex flex-col items-center space-y-5"
    >
      <hr className="w-24 border-3 border-[#009999] rounded mx-auto" />
      <p className="text-semantic-heading2 md:text-5xl leading-12 font-medium text-2xl text-center text-[#FAFAFA]">
        Blog
      </p>
      <p className="text-center text-[#FAFAFA] text-xl leading-7 max-w-3xl ">
        Sharing lessons learned, industry insights, and thoughts on building
        great <br />
        products that solve real problems and create meaningful impact.
      </p>

      <div className="mt-8">
        <div className="flex flex-wrap gap-4 grid-cols-7">
          {blogCategories.map((cat) => (
            <div
              key={cat}
              className="text-inter-medium text-sm leading-5 text-center py-0.5 px-2.5 rounded-sm border-2 border-[#333333] text-[#FAFAFA]"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col py-6 md:py-8 md:px-12 px-4 mt-10 bg-[#1F1F1F] border border-[#1414141A] w-full max-w-5xl rounded-2xl gap-4">
        <div className="flex flex-row gap-2 items-center">
          <img src={feature} className="w-4 h-4" />
          <p className="text-[#00C3D0] text-inter-medium text-sm leading-5">
            Feature
          </p>
        </div>
        <p className="playfair-text-semantic-heading3  md:text-3xl leading-9 text-[#FAFAFA] text-2xl">
          The Future of Product Management: AI and Human-Centered Design
        </p>
        <p className="text-inter-regular text-lg leading-7 text-[#D9D9D9]">
          Exploring how artificial intelligence is reshaping product development
          while keeping human needs at the center of innovation.
        </p>
        <div className="text-inter-regular text-sm leading-5 flex md:flex-row flex-col gap-4">
          <div className="text-[#D9D9D9] flex flex-row items-center space-x-2">
            <CiCalendar />
            <p>15/01/2024</p>
          </div>
          <div className="text-[#D9D9D9] flex flex-row items-center space-x-2">
            <CiClock2 />
            <p>6 min read</p>
          </div>
          <div className="py-1 px-3 text-center font-inter font-normal text-base leading-normal tracking-normal align-middle rounded-full bg-[#0080801A] text-[#00C3D0] font-inter w-fit">
            Product Strategy
          </div>
        </div>
        <Link
          to="/"
          className="text-inter-medium text-sm leading-5 py-1 px-3 inline-flex w-fit flex-row items-center gap-5 rounded-md bg-[#141414] text-[#FAFAFA] cursor-pointer"
        >
          <span >Read Full Article</span>
          <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2 max-w-5xl mx-auto space-y-2 mt-5">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="border border-[#EBEBEB80] bg-[#1F1F1F] rounded-lg px-4 py-7 sm:p-8 flex flex-col space-y-4"
          >
            <div className="py-1 px-2 text-center rounded-full bg-[#0080801A] text-[#00C3D0] font-inter w-fit text-inter-medium text-xs leading-0">
              {post.category}
            </div>
            <p className="playfair-text-semantic-heading3 text-xl leading-7 font-semibold text-[#FAFAFA]">
              {post.title}
            </p>
            <p className="text-inter-regular text-sm leading-6 text-[#D9D9D9]">
              {post.description}
            </p>
            <div className="text-inter-regular text-sm leading-5 flex md:flex-row justify-between flex-col space-y-2 md:space-y-0 md:space-x-4">
              <div className="text-[#D9D9D9] flex flex-row items-center space-x-2">
                <CiCalendar />
                <p>{post.date}</p>
              </div>
              <div className="text-[#D9D9D9] flex flex-row items-center space-x-2">
                <CiClock2 />
                <p>{post.readTime}</p>
              </div>
            </div>
            <Link
              to={post.link}
              className="text-inter-medium text-sm leading-5 py-2 inline-flex w-fit flex-row items-center gap-5 text-[#00C3D0] cursor-pointer"
            >
              <span>Read More</span>
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col text-center items-center py-6 md:py-8 px-4 md:px-8 mt-10 bg-[#1F1F1F] border border-[#EBEBEB80] w-full max-w-5xl rounded-2xl gap-4">
        <p className="Text-playfair-display-semiBold md:text-2xl leading-8 text-[#FAFAFA]">
          Stay Updated
        </p>
        <p className="text-inter-regular text-sm leading-6 text-[#D9D9D9]">
          Get notified when I publish new insights about product management, leadership, and innovation.
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

    </section>
  );
};

export default HomeBlog;
