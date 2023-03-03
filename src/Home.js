import React from 'react'
import styled from 'styled-components';
import HeroSection from './component/HeroSection';

const Home = () => {
  const data = {
    name: 'Hero Store',
  }
  return (
    <Wrapper>
      <HeroSection myData={data} />
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.section`
height: 100vh;
`;