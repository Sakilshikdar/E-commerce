import React from 'react'
import HeroSection from './component/HeroSection'
import { useProductContext } from './context/ProductContext'

const About = () => {
  const { myName } = useProductContext()

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