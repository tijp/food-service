import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './hamburger-menu.css'
import COLORS from '../assets/colors';

import { ReactComponent as HamburgerSVG } from '../assets/icons/line-menu.svg';
import ShoppingCart from './ShoppingCart';

const HeaderContainer = styled.header`
  /* margin-top: 20px; */
  /* margin-bottom: 44px; */
  border-top: 3px solid ${COLORS.PRIMARY_COLOR};
`;

const Row = styled.div`
  padding: 20px 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled(Row)`
  padding: 0;
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

  &:hover {
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  flex: 1;
  color: unset;
  text-decoration: none;
  padding: 15px;

  &:hover {
    cursor: pointer;
    color: ${COLORS.PRIMARY_COLOR};
    transition: color 300ms ease;
  }
`;

const Nav = styled.ul<{ open?: boolean }>`
  list-style: none;
  padding: 0;
  /* float: left; */
  width: 100%;
  margin: 0;
  text-align: left;
  height: auto;
  overflow: visible;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  height: ${props => props.open ? 'auto' : 0};
  overflow: ${props => props.open ? 'visible' : 'hidden' };

  & li {
    float: none;
    position: relative;
    margin-right: 0;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

const Header = () => {
  const [expandNav, setExpandNav] = useState(false);

  const li = (text: string, path: string) =>
    <li onClick={() => setExpandNav(false)}><NavLink to={path}>{text}</NavLink></li>;


  return (
    <HeaderContainer>

      <Row>
        <Logo to="/">Food<LogoColorSpan>Service</LogoColorSpan></Logo>

        <IconContainer>
          <ShoppingCart />
          <Hamburger onClick={() => setExpandNav(!expandNav)} />
        </IconContainer>
      </Row>

      <Nav open={expandNav} role="navigation">
        {li('Products', '/products')}
        {li('FAQ', '/faq')}
        {li('Contact', '/contact')}
      </Nav>

      {/* <MenuItem to="/contact">Contact</MenuItem> */}
    </HeaderContainer>
  );
};

export default Header;
