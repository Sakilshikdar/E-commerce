import React from 'react'
import HeroSection from './component/HeroSection'

const About = () => {
  const data = {
    name: 'Hero Ecommerce',
  }
  return (
    <div>
      <HeroSection myData={data} />
    </div >
  )
}

export default About