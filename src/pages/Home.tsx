import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import ShowcaseList from '../components/ShowcaseList';
import { getProductFromCategory, CATEGORIES } from '../assets/products';
import jumbotronImage from 'assets/images/jumbotron4.jpg';

const Jumbotron = styled.div`
  color: #fff;
  text-align: center;
  margin-bottom: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: 100%;
  height: 440px;
  filter: brightness(0.6);

  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${jumbotronImage});
`;

const Content = styled.div`
  position: absolute;
  font-size: 24px;
`;

const Home = () => (
  <section>
    <Jumbotron>
      <Image />

      <Content>
        <h1>This website is using the new React Hooks</h1>
        <h2 style={{ fontWeight: 'normal' }}>Jumbotron Content</h2>
        <Button text="Show more" />
      </Content>
  
    </Jumbotron>
  
    <ShowcaseList name="Category 1" showcaseItems={getProductFromCategory(CATEGORIES.ONE)} />
    <ShowcaseList name="Category 2" showcaseItems={getProductFromCategory(CATEGORIES.TWO)} />
  </section>
);

export default Home;
