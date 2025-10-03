import React from 'react';
import { LuLightbulb } from "react-icons/lu";
import Impact from '../../assets/Impact.svg';
import Leadership from '../../assets/Leadership.svg';
import Strategy from '../../assets/Strategy.svg';
import love from '../../assets/love.svg';

const HomeAbout = () => {
  const cards = [
    {
      icon: <LuLightbulb className="text-[#00C3D0] text-3xl" />,
      title: 'Innovation',
      description: 'Pioneering solutions that push boundaries and create new possibilities',
    },
    {
      icon: <img src={Strategy} alt="Strategy" className="w-8 h-8 mx-auto mb-2" />,
      title: 'Strategy',
      description: 'Building clear roadmaps to align teams and achieve long-term goals',
    },
    {
      icon: <img src={Leadership} alt="Leadership" className="w-8 h-8 mx-auto mb-2" />,
      title: 'Leadership',
      description: 'Empowering teams to innovate, collaborate, and execute effectively',
    },
    {
      icon: <img src={Impact} alt="Impact" className="w-8 h-8 mx-auto mb-2" />,
      title: 'Impact',
      description: 'Delivering measurable results that transform organizations and lives',
    },
  ];

  const passions = [
    'Design Thinking',
    'AI & Machine Learning',
    'Sustainable Technology',
    'Mentoring',
    'Travel Photography',
    'Yoga & Mindfulness',
  ];

  return (
    <section id="homeabout" className="min-h-screen px-4 md:px-16 lg:px-24 xl:px-72 2xl:72 flex flex-col items-center">
      <hr className="w-24 border-3 border-[#009999] rounded mx-auto mt-4" />

      <p className="font-medium text-2xl lg:text-4xl playfair-text-semantic-heading2 md:text-5xl leading-12 tracking-normal text-center text-[#FAFAFA] mt-4">
        About Me
      </p>

      <p className="text-regular text-xl leading-7 tracking-normal text-center text-[#D9D9D9] max-w-3xl mt-4">
        I'm a passionate Product Manager with over 5 years of experience transforming <br />
        ideas into successful digital products. My journey spans across diverse <br />
        industries, from fintech startups to enterprise software, where I've consistently <br />
        delivered solutions that drive growth and delight users.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
        {cards.map((card, index) => (
          <div key={index} className="border border-[#EBEBEB80] bg-[#1F1F1F] rounded-lg p-6 text-center">
            <div className="flex justify-center">{card.icon}</div>
            <p className="text-[#FAFAFA] mt-2 Text-playfair-display-semiBold text-xl leading-7">{card.title}</p>
            <p className="text-[#D9D9D9] pt-3 text-inter-regular text-sm leading-6">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10 bg-[#1F1F1F] w-full max-w-5xl px-6 md:px-12 py-12 rounded-2xl text-center">
        <div className="text-[#FAFAFA] text-semantic-blockquote text-xl leading-8">
          "Great products aren't just built—they're crafted with intention, empathy, and <br />
          an unwavering commitment to solving real human problems."
        </div>
        <p className="text-[#D9D9D9] mt-4 text-inter-regular text-sm leading-6">- Ugochi Nwokonko</p>

        <div className="w-full text-inter-bold text-3xl leading-9 text-[#00C3D0] flex flex-row justify-evenly mt-6">
          <div>25+</div>
          <div>100M+</div>
          <div>15+</div>
        </div>
      </div>

      <div className="flex flex-col justify-start mt-10 bg-[#1F1F1F] border border-[#EBEBEB80] w-full max-w-5xl px-6 md:px-8 py-10 rounded-2xl">
        <div className="flex items-center gap-3">
          <img src={love} alt="Impact" className="w-6 h-6" />
          <p className="Text-playfair-display-semiBold text-xl leading-7 text-[#FAFAFA] tracking-normal">
            Interest & Passions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-6">
          {passions.map((passion, idx) => (
            <div
              key={idx}
              className="py-2 px-3 w-fit rounded-full bg-[#0080801A] text-[#00C3D0] text-center text-inter-medium text-sm leading-5"
            >
              {passion}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
