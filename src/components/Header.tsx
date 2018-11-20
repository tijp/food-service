import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-top: 20px;
  margin-bottom: 44px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  font-weight: bold;
  font-size: calc(10px + 2vmin);
`;

const RedSpan = styled.span`
  color: #ff6464;
`;

const StyledLink = styled(Link)`
  color: unset;
  text-decoration: none;
`;

const MenuItem = styled(StyledLink)`
  font-weight: normal;
  font-size: calc(8px + 1.2vmin);

  &:hover {
    cursor: pointer;
    color: #ff6464;
    transition: color 300ms ease;
  }
`;

const Header = () => (
  <HeaderContainer>
    <StyledLink to="/">Header <RedSpan>Title</RedSpan></StyledLink>

    <MenuItem to="/contact">Contact</MenuItem>
  </HeaderContainer>
);

export default Header;
