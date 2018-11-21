import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './hamburger-menu.css'
import COLORS from '../assets/colors';

import { ReactComponent as HamburgerSVG } from '../assets/icons/line-menu.svg';

const HeaderContainer = styled.header`
  /* margin-top: 20px; */
  /* margin-bottom: 44px; */
  padding: 20px 16px;
  border-top: 3px solid ${COLORS.PRIMARY_COLOR};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: unset;
  font-weight: 800;
  font-size: calc(22px + 2vmin);
  letter-spacing: -2px;
  text-decoration: none;
`;

const LogoColorSpan = styled.span`
  color: ${COLORS.PRIMARY_COLOR};
`;

const Hamburger = styled(HamburgerSVG)`
  margin-right: 5px;
  width: 23px; height: 23px;
`;

// const MenuItem = styled(StyledLink)`
//   font-weight: normal;
//   font-size: calc(8px + 1.2vmin);

//   &:hover {
//     cursor: pointer;
//     color: #ff6464;
//     transition: color 300ms ease;
//   }
// `;

const Header = () => (
  <HeaderContainer>

    <Logo to="/">Food<LogoColorSpan>Service</LogoColorSpan></Logo>
    <Hamburger />

    {/* <Menu right>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu> */}

    {/* <MenuItem to="/contact">Contact</MenuItem> */}
  </HeaderContainer>
);

export default Header;
