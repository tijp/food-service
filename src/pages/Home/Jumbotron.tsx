import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import jumbotronImage from 'assets/images/jumbotron4.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <h2>This website is using the new React Hooks</h2>
      <Link to="/products">
        <Button text="Discover products" onClick={() => 'TODO'} />
      </Link>
    </Content>

  </Container>
);

export default Jumbotron;
