import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BasketButton from './BasketButton';
import { ReactComponent as HamburgerSVG } from '../../assets/icons/line-menu.svg';
import COLORS from '../../assets/colors';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Padding = styled(Row)`
  padding: 10px 0;
  @media (max-width: 1088px) {
    padding: 10px 16px;
  }
`;

const IconContainer = styled(Row)`
  padding: 0;
`;

const Logo = styled(Link)`
  color: unset;
  font-weight: 800;
  font-size: calc(22px + 1.8vmin);
  letter-spacing: -2px;
  text-decoration: none;
  margin: 10px 0;
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

  @media (min-width: 875px) {
    display: none;
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

  @media (min-width: 875px) {
    font-size: 1.15em;
    font-weight: 500;
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  margin-right: 40px;

  @media (max-width: 874px) {
    display: none;
  }
`;

const HamburgerNav = styled.ul<{ open?: boolean }>`
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

  @media (min-width: 875px) {
    display: none;
  }
`;

const Header = () => {
  const [expandNav, setExpandNav] = useState(false);

  const li = (text: string, path: string) =>
    <li onClick={() => setExpandNav(false)}><NavLink to={path}>{text}</NavLink></li>;

  const MenuItems = () => (
    <>
      {li('Vragen', '/vragen')}
      {li('Contact', '/contact')}
      {li('Over ons', '/over-ons')}
    </>
  );


  return (
    <header>
      <Padding>
        <Logo to="/">Slaatjes<LogoColorSpan>van</LogoColorSpan>Els</Logo>
        <Row>
          <Nav role="navigation"><MenuItems /></Nav>

          <IconContainer>
            <BasketButton />
            <Hamburger onClick={() => setExpandNav(!expandNav)} />
          </IconContainer>
        </Row>
      </Padding>

      <HamburgerNav open={expandNav} role="navigation">
        <MenuItems />
      </HamburgerNav>
    </header>
  );
};

export default Header;
