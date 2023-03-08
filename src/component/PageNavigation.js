import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const PageNavigation = ({ name }) => {
    return (
        <Wrapper>
            <NavLink to="/">
                Home
            </NavLink>/{name}
        </Wrapper>
    )
}

const Wrapper = styled.section`
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    font-size: 3.2rem;
    flex:start;
    justify-content: start;
    align-items: center;
    padding-left: 1.2rem;
    a{
        font-size: 3.2rem;
    }
`;

export default PageNavigation