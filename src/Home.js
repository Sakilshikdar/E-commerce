import React from 'react'
import styled from 'styled-components';
import HeroSection from './component/HeroSection';
import Services from './component/Services';
import Trusted from './component/Trusted';

const Home = () => {
  const data = {
    name: 'Hero Store',
  }
  return (
    <Wrapper>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.section`
height: 100vh;
`;