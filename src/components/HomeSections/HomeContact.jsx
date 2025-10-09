import React, { useState } from 'react';
import Email from '../../assets/email.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import calendarschedule from '../../assets/calendarschedule.svg';
import Location from '../../assets/Location.svg';
import Send from '../../assets/send.png';

const contactMethods = [
  {
    icon: Email,
    title: "Email",
    description: "nwokonkougo@gmail.com",
    bg: "#0080801A",
    link: "mailto:nwokonkougo@gmail.com"
  },
  {
    icon: LinkedIn,
    title: "LinkedIn",
    description: "Connect with me professionally",
    bg: "#646a6a1a",
    link: "https://www.linkedin.com/in/ugochi-nwokonko/"
  },
  {
    icon: calendarschedule,
    title: "Schedule a Call",
    description: "Book a time that works for you",
    bg: "#0080801A",
    link: ""
  }
];

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      subject: !formData.subject,
      message: !formData.message
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (!hasError) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); 
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="homecontact" className="min-h-screen px-4 md:px-16 lg:px-24 xl:px-72 2xl:72 flex flex-col items-center">
      <hr className="w-24 border-3 border-[#009999] rounded mx-auto mt-4" />

      <div className='md:max-w-5xl w-full'>
        <p className="font-medium text-2xl md:text-4xl lg:text-5xl leading-tight text-center text-[#FAFAFA] mt-4 playfair-text-semantic-heading2">
          Let's Connect
        </p>

        <p className="text-inter-regular text-xl md:text-lg leading-7 text-center text-[#D9D9D9] max-w-3xl mt-4 mx-auto">
          Ready to build something amazing together? I'm always excited to discuss new opportunities, innovative projects, and ways to create meaningful impact.
        </p>

        <div className='flex flex-col md:flex-row justify-between md:mt-14 mt-8 gap-8'>
          <div className='flex-1 flex flex-col space-y-5'>
            <p className='playfair-text-semantic-heading3 text-2xl md:text-3xl leading-8 text-[#FAFAFA]'>
              Get in Touch
            </p>

            <p className='text-inter-regular leading-6 text-sm md:text-base text-[#D9D9D9]'>
              Whether you're looking for a product manager to join your team,
              interested in collaboration, or just want to chat about product strategy, I'd love to hear from you.
            </p>

            <div className='flex flex-col space-y-4'>
              {contactMethods.map((item, idx) => (
                <div
                  key={idx}
                  className='bg-[#262626] rounded-lg p-4 md:p-6 border border-[#0000000D] flex flex-row items-center gap-4 md:gap-5 w-full'
                >
                  <div
                    style={{ backgroundColor: item.bg }}
                    className='rounded-lg p-3 flex items-center justify-center'
                  >
                    <img src={item.icon} alt={item.title} className="w-6 h-6 md:w-8 md:h-8"/>
                  </div> 
                  <div className='flex flex-col'>
                    <p className='text-[#FAFAFA] text-semantic-heading2 text-base md:text-lg'>{item.title}</p>
                    <p className='text-[#D9D9D9] text-inter-regular text-sm'>{item.description}</p>
                  </div>
                </div>
              ))}

              <span className='flex flex-row gap-3 items-start mt-2'>
                <img src={Location} alt="Location" className="w-5 h-5 md:w-6 md:h-6 mt-1"/>
                <p className='text-[#D9D9D9] text-inter-regular text-sm md:text-base leading-6'>
                  Based in Lagos, Nigeria, CA • Open to remote opportunities
                </p>
              </span>
            </div>
          </div>

        
          <div className='w-full md:w-1/2 flex flex-col space-y-4 px-6 py-8 bg-[#262626] rounded-xl'>
            <p className='text-[#FAFAFA] playfair-text-semantic-heading3 text-2xl md:text-3xl leading-8'>
              Send a Message
            </p>

            <div className='flex flex-col md:flex-row gap-5 w-full'>
              <div className='flex flex-col flex-1'>
                <p className='text-inter-medium size-sm leading-3'>Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`bg-[#141414] mt-4 placeholder:text-[#D9D9D9] rounded-md outline-none text-[#FAFAFA] px-3 py-2.5 w-full ${errors.name ? 'border border-red-500' : ''}`}
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">Field is required</span>}
              </div>

              <div className='flex flex-col flex-1'>
                <p className='text-inter-medium size-sm leading-3'>Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your@email.com"
                  className={`bg-[#141414] mt-4 placeholder:text-[#D9D9D9] rounded-md outline-none text-[#FAFAFA] px-3 py-2.5 w-full ${errors.email ? 'border border-red-500' : ''}`}
                />
                {errors.email && <span className="text-red-500 text-sm mt-1">Field is required</span>}
              </div>
            </div>

            <div className='flex flex-col gap-4 w-full'>
              <p className='text-inter-medium size-sm leading-3'>Subject</p>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className={`bg-[#141414] placeholder:text-[#D9D9D9] rounded-md outline-none text-[#FAFAFA] px-3 py-2.5 w-full ${errors.subject ? 'border border-red-500' : ''}`}
              />
              {errors.subject && <span className="text-red-500 text-sm mt-1">Field is required</span>}
            </div>

            <div className='flex flex-col gap-4'>
              <p className='text-inter-medium size-sm leading-3'>Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, opportunity, or how I can help..."
                className={`bg-[#141414] placeholder:text-[#D9D9D9] text-inter-medium size-sm leading-3 rounded-md outline-none text-[#FAFAFA] px-3 py-2.5 w-full h-32 resize-none ${errors.message ? 'border border-red-500' : ''}`}
              />
              {errors.message && <span className="text-red-500 text-sm mt-1">Field is required</span>}
            </div>

            <button
              type='button'
              disabled={!isFormValid}
              onClick={handleSubmit}
              className={`bg-[#141414] rounded-md flex items-center justify-center gap-2 px-4 py-2.5 w-full text-[#FAFAFA] hover:bg-[#1a1a1a] transition ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <img src={Send} alt="Send" className="w-4 h-4" />
              <span className='text-inter-medium text-sm leading-5'>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
