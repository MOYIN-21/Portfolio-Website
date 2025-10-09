import React from 'react'
import email from "../../assets/email.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import calendarschedule from '../../assets/calendarschedule.svg';
import Send from '../../assets/send.png';


 const cards = [
   {
      icon: <img src={email} alt="Strategy" className="w-12 h-12 mx-auto mb-2" />,
      title: 'Email',
      description: 'For project inquiries and collaborations',
      com: 'nwokonkougo@gmail.com',
      buttonText: "Send Email",
      link:"https://www.linkedin.com/in/ugochi-nwokonko/"
    },
      {
      icon: <img src={LinkedIn} alt="Leadership" className="w-12 h-12  mx-auto mb-2" />,
      title: 'LinkedIn',
      description: 'Lets connect professionally',
      com: '/ugochi-nwokonko',
      buttonText: "Connect",
      link: "https://www.linkedin.com/in/ugochi-nwokonko/"
    },
    {
      icon: <img src={calendarschedule} alt="Schedule" className="w-12 h-12 mx-auto mb-2" />,
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation',
      com: 'calendly.com/ugochi',
      buttonText: 'Book Meeting',
      link: 'https://calendly.com/ugochi/30min'
    }
  ];

const Contact = () => {

  const handleSubmit=()=>{
    
  }
  
  return (
     <section id="contact"
    className="min-h-screen px-4 md:px-16  lg:px-24 flex flex-col items-center space-y-20 py-10 pt-30"
    >
       <div className="flex flex-col text-center space-y-48 ">
         <p className="text-semantic-heading1 leading-10 md:text-7xl text-2xl">
          Let's <span className='text-[#00CCCC]'>Connect</span> 
        </p>

         <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
              {cards.map((card, index) => (
                <div key={index} className="border space-y-2 border-[#EBEBEB80] bg-[#1F1F1F]  rounded-lg p-6 text-center">
                  <div className="flex justify-center"> {card.icon}</div>
                  <p className="text-[#FAFAFA] mt-2 Text-playfair-display-semiBold text-xl leading-7">{card.title}</p>
                  <p className="text-[#D9D9D9] pt-3 text-inter-regular text-sm leading-6">{card.description}</p>
                  <a className="text-[14px] leading-5 text-[#00CCCC] text-inter-medium"> {card.com}
                  </a>
                <div className='py-2'>
                   <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#141414] cursor-pointer text-white w-full px-4 py-2 items-center justify-center">
                      {card.buttonText}
                    </button>
                  </a>
                </div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col md:flex-row w-full max-w-7xl py-48 overflow-hidden"
            >
              <div className="hidden md:block w-1/2">
                <p className='flex justify-start'>Send a Message</p>
                <p>Fill out the form below and I'll get back to you as soon as possible. Please include as much detail about your project as you can.</p>

                <form>
                  <div className='flex flex-col space-y-5'>
                    <div className='flex flex-row gap-4 w-full'>
                      <div>
                        <p className='flex justify-start'> Full Name</p>
                        <input type="text" name="" id="" className='border boder-[#262626] h-10 w-full rounded-md' />
                      </div>
                      <div>
                        <p className='flex justify-start'>Email Address</p>
                        <input type="email" name="" id="" className='border boder-[#262626] h-10 w-full rounded-md' />
                      </div>
                    </div>

                    <div>
                      <p className='flex justify-start'> Company/Organization</p>
                      <input type="text" name="" id="" className='border boder-[#262626] h-10 w-full rounded-md' />
                    </div>

                    <div>
                      <p className='flex justify-start'>Subject</p>
                      <input type="text" name="" id="" className='border boder-[#262626] h-10 w-full rounded-md' />
                    </div>

                    <div>
                      <p className='flex justify-start'>Message</p>
                      <input type="text" name="" id="" className='border boder-[#262626] max-h-32 min-h-20 w-full rounded-md' />
                    </div>

                    <button
                      type='button'
                      onClick={handleSubmit}
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 w-full text-[#FAFAFA] transition`}
                    >
                      <img src={Send} alt="Send" className="w-4 h-4" />
                      <span className='text-inter-medium text-sm leading-5'>Send Message</span>
                    </button>
                  </div>

                </form>
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col space-y-4">
                <div className="border space-y-2 border-[#EBEBEB80] bg-[#1F1F1F]  rounded-lg p-6 text-center">
                  <div className="flex justify-center"> vcvcvbc</div>
                  <p className="text-[#FAFAFA] mt-2 Text-playfair-display-semiBold text-xl leading-7">vbn</p>
                  <p className="text-[#D9D9D9] pt-3 text-inter-regular text-sm leading-6">hghjghj</p>
                  <a className="text-[14px] leading-5 text-[#00CCCC] text-inter-medium">  ghjgj
                  </a>
                </div>
              </div>
            </div>
          </div>

      </div>

  </section>
  )
}

export default Contact
