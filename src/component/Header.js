import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
    return (
        <MainHeader>
            <NavLink to={"/"}>
                <img src="./images/logo.png" alt="" />
            </NavLink>
            <Navbar />
        </MainHeader>
    )
}

export default Header;

const MainHeader = styled.header`
     padding: 0 4.8rem;
     height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  
 .logo{
    height: 5rem;
 }   
    
`;