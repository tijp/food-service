import React from 'react';
import styled from 'styled-components';

import FacebookIcon from '../assets/icons/facebook.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import InstagramIcon from '../assets/icons/instagram.svg';

const FooterContainer = styled.footer`
  /* flex-shrink: 0; */
  width: 100vw;
  margin-top: 40px;
  background: #333;
`;

const Content = styled.div`
  max-width: 1238px;
  margin: 0 auto;
  padding: 32px;

  color: #fff;
  font-size: 20px;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
`;

const Icon = styled.img`
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Copyright = styled.i`
  display: flex;
  justify-content: center;
  color: #fff;
  margin-bottom: 48px;
`;

const Footer = () => (
  <FooterContainer>
    <Content>
      <Col>
        <Icon src={FacebookIcon} width={48} />
        <Icon src={TwitterIcon} width={48} />
        <Icon src={InstagramIcon} width={48} />
      </Col>
      <Col />
      <Col>
        <p>Contact</p>
        <p>About</p>
      </Col>
    </Content>

    <Copyright>© Copyright 2018</Copyright>
  </FooterContainer>
);

export default Footer;
