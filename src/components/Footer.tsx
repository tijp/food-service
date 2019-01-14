import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FacebookIcon from '../assets/icons/facebook.svg';

const FooterContainer = styled.footer`
  width: 100vw;
  margin-top: 100px;
  background: #333;
`;

const Content = styled.div`
  max-width: 1056px;
  margin: 0 auto;
  padding: 32px;

  color: #fff;
  font-size: 20px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.hr`
  width: 100%; height: 2px;
  border: none;
  background: #666;
`;

const StyledLink = styled(Link)`
  width: fit-content;
  color: #fff;
  text-decoration: none;
  margin: .65em 0;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: #ccc;
    transition: color 300ms ease;
  }
`;

const Icon = styled.img`
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Copyright = styled.i`
  display: flex;
  justify-content: center;
  color: #fff;
  margin-bottom: 40px;
  font-size: 14px;
`;

const Footer = () => (
  <FooterContainer>
    <Content>
      <h3>FoodService</h3>

      <Line />
      <StyledLink to="/vragen">Vragen</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/over-ons">Over ons</StyledLink>
      <Line />

      <Icon src={FacebookIcon} width={48} height={48} />
    </Content>

    <Copyright>© Copyright 2019</Copyright>
  </FooterContainer>
);

export default Footer;
