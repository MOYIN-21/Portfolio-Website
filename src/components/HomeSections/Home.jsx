import React from 'react'
import HomeAbout from './HomeAbout'
import HomeProjects from './HomeProjects'
import HomeSkills from './HomeSkills'
import HomeBlog from './HomeBlog'
import HomeContact from './HomeContact'
import HomeHero from './HomeHero'
import HomeFooter from './HomeFooter'

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col gap-y-30" 
    >
      <HomeHero />
      <HomeAbout />
      <HomeProjects />
      <HomeSkills />
      <HomeBlog />
      <HomeContact />
      <HomeFooter/>
    </section>
  )
}

export default Home
