import React from 'react';
import styled from 'styled-components';

import COLORS from '../assets/colors';
import FacebookIcon from '../assets/icons/facebook.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import InstagramIcon from '../assets/icons/instagram.svg';

const FooterContainer = styled.footer`
  margin-top: 100px;
  width: 100vw;
  background: ${COLORS.PRIMARY_COLOR};
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
  margin: 48px 0;
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
