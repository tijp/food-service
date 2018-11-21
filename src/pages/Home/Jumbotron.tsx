import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import jumbotronImage from 'assets/images/jumbotron4.jpg';

const Container = styled.div`
  color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.div`
  width: 100%;
  height: 440px;
  filter: brightness(0.6);

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${jumbotronImage});
`;

const Content = styled.div`
  position: absolute;
  font-size: 24px;
  padding: 16px;
  margin-top: -25px;
`;

const Jumbotron = () => (
  <Container>
    <Image />

    <Content>
      <h1>This website is using the new React Hooks</h1>
      <Button text="Show more" />
    </Content>

  </Container>
);

export default Jumbotron;
