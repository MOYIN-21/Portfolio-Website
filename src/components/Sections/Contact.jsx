import React from 'react';
import email from '../../assets/email.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import calendarschedule from '../../assets/calendarschedule.svg';
import Send from '../../assets/send.png';
import Location from '../../assets/Location.svg';
import FooterCTASection from '../reusables/FooterCTASection';

const cards = [
  {
    icon: email,
    title: 'Email',
    description: 'For project inquiries and collaborations',
    com: 'nwokonkougo@gmail.com',
    buttonText: 'Send Email',
    link: 'mailto:nwokonkougo@gmail.com',
  },
  {
    icon: LinkedIn,
    title: 'LinkedIn',
    description: 'Let’s connect professionally',
    com: 'ugochi-nwokonko',
    buttonText: 'Connect',
    link: 'https://www.linkedin.com/in/ugochi-nwokonko/',
  },
  {
    icon: calendarschedule,
    title: 'Schedule a Call',
    description: 'Book a 30-minute consultation',
    com: 'calendly.com/ugochi',
    buttonText: 'Book Meeting',
    link: 'https://calendly.com/ugochi/30min',
  },
];

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on scope, but most projects range from 4–12 weeks. I’ll provide a detailed timeline during our initial consultation.",
  },
   {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, I offer post-launch support including updates, user feedback analysis, and iterative improvements to ensure your product’s success.',
  },
  {
    question: 'Do you work with startups?',
    answer:
      'Absolutely! I love working with startups and early-stage companies. I offer flexible pricing options and can work within startup budgets.',
  },
   {
    question: 'Can you work with our existing team?',
    answer:
      'Definitely! I’m experienced in collaborating with development teams, product managers, and other stakeholders for smooth execution.',
  },
  {
    question: "What's included in your design process?",
    answer:
      'My process includes research, wireframing, prototyping, user testing, and development handoff. Each project is customized to your needs.',
  },
  {
    question: 'What tools do you use?',
    answer:
      'I primarily use Figma for design, but I’m also proficient with Adobe Creative Suite, Sketch, and various prototyping tools.',
  },
];

const Contact = () => {
  const handleSubmit = () => {};

  return (
    <section
      id="contact"
      className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center space-y-20 py-10 pt-30"
    >
      <div className="text-center">
        <h2 className="text-semantic-heading1 leading-10 md:text-7xl text-2xl">
          Let's <span className="text-[#00CCCC]">Connect</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:pt-48 pt-10 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className="border border-[#EBEBEB80] bg-[#1F1F1F] rounded-lg p-6 text-center space-y-3 hover:scale-[1.02] transition-transform duration-200"
          >
            <img src={card.icon} alt={card.title} className="w-12 h-12 mx-auto" />
            <h3 className="text-[#FAFAFA] Text-playfair-display-semiBold text-xl leading-7">{card.title}</h3>
            <p className="text-[#D9D9D9] text-inter-regular text-sm leading-6">{card.description}</p>
            <a className="text-[14px] leading-5 text-[#00CCCC] text-inter-medium"> {card.com} </a>
            <div className='py-2'> <a href={card.link} target="_blank" rel="noopener noreferrer" > <button className="bg-[#141414] cursor-pointer text-white w-full px-4 py-2 items-center justify-center text-inter-medium text-[14px] leading-5"> {card.buttonText} </button> </a> </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl pt-10 md:pt-48">
        <div className="flex-1 space-y-4">
          <h3 className=" text-[#FAFAFA] leading-8 text-semantic-heading2 text-2xl">Send a Message</h3>
          <p className="text-sm text-[#D9D9D9] text-inter-regular text-sm leading-6">
            Fill out the form below and I'll get back to you as soon as possible. Include as much
            detail about your project as you can.
          </p>

          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <span className="flex flex-row gap-1">
                  <p className="text-[#FAFAFA] text-sm text-semantic-heading2 leading-3.5">Full Name</p>
                  <p className='leading-3.5'>*</p>
                </span>
                <input
                  type="text" required
                  className="border border-[#262626] bg-transparent text-white h-10 w-full rounded-md px-3"
                />
              </div>
              <div className="flex-1 space-y-2">
                <span className="flex flex-row gap-1">
                <p className="text-[#FAFAFA] text-sm text-semantic-heading2 leading-3.5">Email Address</p>
                  <p className='leading-3.5'>*</p>
                </span>
                <input
                  type="email" required
                  className="border border-[#262626] bg-transparent text-white h-10 w-full rounded-md px-3"
                />
              </div>
            </div>

            <div className='space-y-2'>
              <p className="text-[#FAFAFA] text-sm text-semantic-heading2 leading-3.5">Company / Organization</p>
              <input
                type="text"
                className="border border-[#262626] bg-transparent text-white h-10 w-full rounded-md px-3"
              />
            </div>

            <div className='space-y-2'>
              <span className="flex flex-row gap-1">
              <p className="text-[#FAFAFA] text-sm text-semantic-heading2 leading-3.5">Subject</p>
                  <p className='leading-3.5'>*</p>
                </span>
              <input
                type="text" required
                className="border border-[#262626] bg-transparent text-white h-10 w-full rounded-md px-3"
              />
            </div>

            <div className="flex flex-col items-start space-y-2">
            <span className="flex items-center gap-1">
              <p className="text-[#FAFAFA] text-sm text-semantic-heading2 leading-3.5">
                Message
              </p>
              <p className="leading-3.5">*</p>
            </span>

            <textarea
              required
              className="border border-[#262626] bg-transparent text-white w-full rounded-md p-3 min-h-[100px] focus:outline-none focus:border-[#00C3D0]"
            ></textarea>
          </div>



            {/* <div className='flex flex-col items-start space-y-2'>
              <span className="flex items-start gap-1">
              <p className="text-[#FAFAFA] text-sm text-semantic-heading2 leading-3.5">Message</p>
                  <p className='text-[#00C3D0]"'>*</p>
                </span>
              <textarea required
                className="border border-[#262626] bg-transparent text-white w-full rounded-md p-3 min-h-[100px]"
              ></textarea>
            </div> */}

            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center cursor-pointer justify-center gap-2 px-4 py-2.5 w-full text-[#FAFAFA]"
            >
              <img src={Send} alt="Send" className="w-4 h-4" />
              <span className='text-inter-medium text-sm leading-5 cursor-pointer'>Send Message</span>
            </button>
          </form>
        </div>

        <div className="flex-1">
          <div className="border border-[#EBEBEB80] bg-[#1F1F1F] rounded-lg p-6 space-y-6">
            <div className="flex items-center gap-3">
              <img src={Location} alt="location" className="w-6 h-6" />
              <h3 className=" text-[#FAFAFA] text-xl leading-7 playfair-text-semantic-heading3">Location & Availability</h3>
            </div>
            <p className="text-sm text-[#D9D9D9] leading-6 text-inter-medium">Based in San Francisco, CA</p>
            <div className="flex justify-between text-sm text-[#FAFAFA]">
              <div className="space-y-3 text-inter-medium text-[14px] leading-5">
                <p>Monday - Friday</p>
                <p>Weekend</p>
                <p>Response Time</p>
                <p>Time Zone</p>
              </div>
              <div className="space-y-3 text-[#D9D9D9] text-inter-medium text-[14px] leading-5">
                <p>9:00 AM - 6:00 PM PST</p>
                <p>Limited availability</p>
                <p>Within 24 hours</p>
                <p>Pacific Standard Time (PST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl space-y-8 md:pt-48 pt-10">
        <div className="text-center space-y-5">
          <h3 className="text-2xl playfair-text-semantic-heading2 leading-8 text-[#FAFAFA]">Frequently Asked Questions</h3>
          <p className="text-sm text-[#D9D9D9] text-inter-regular teat-sm leading-6">
            Here are some common questions about working with me and my design process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-2 rounded-lg ">
              <p className="text-[#FAFAFA] playfair-text-semantic-heading3 text[#FAFAFA] text-[16px] leading-6">{faq.question}</p>
              <p className="text-[#D9D9D9] text-inter-regularleading-5 text-[14px]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

        <FooterCTASection
          title="Ready to Start Your Next Project?"
          description="Whether you're just starting with an idea or need help improving an existing product, I'm here to help bring your vision to life."
          primaryText="Schedule a call"
          secondaryText="View my work"
          secondaryLink="/projects"
        />
    </section>
  );
};

export default Contact;
