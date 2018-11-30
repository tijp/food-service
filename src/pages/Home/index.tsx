import React from 'react';

import Jumbotron from './Jumbotron';
import Section from '../../components/Styled/Section';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { products, CATEGORIES } from '../../assets/mockedProducts';

const ImageOverlay = styled.div`
  height: 120px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.35);
    z-index: 1;
  }
`;

const CategoryImage = styled.img`
  height: 100%; width: 100%;
  object-fit: cover;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  overflow: hidden;
  transform: translateZ(0);
`;

const ImageText = styled.h4`
  z-index: 2;
  color: #fff;
  position: absolute;
  bottom: 0;
  margin: 0 0 10px 10px;
`;

const Home = () => {
  // const categories = Object.values(CATEGORIES);
  // console.log(categories);

  return (
    <section>
      <Jumbotron />
    
      <Section>
        <h2>We offer</h2>

        <Link to="/products#Category 2">
          <ImageOverlay>
            <ImageText>CATEGORY 1</ImageText>
            <CategoryImage src={require('../../assets/images/food1.jpg')} />
          </ImageOverlay>
        </Link>
        <ImageOverlay>
          <ImageText>CATEGORY 2</ImageText>
          <CategoryImage src={require('../../assets/images/food2.jpg')} />
        </ImageOverlay>
        <ImageOverlay>
          <ImageText>CATEGORY 3</ImageText>
          <CategoryImage src={require('../../assets/images/food3.jpg')} />
        </ImageOverlay>
      </Section>
    </section>
  );
};

export default Home;
