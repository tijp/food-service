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
  text-transform: uppercase;
`;

const CategoryCard = (category: string) => (
  <Link to={`/products#${category}`} key={category}>
    <ImageOverlay>
      <ImageText>{category}</ImageText>
      <CategoryImage src={require(`../../assets/images/categories/${category}.jpg`)} />
    </ImageOverlay>
  </Link>
);

const Home = () => {
  const categories: string[] = Object.values(CATEGORIES);

  return (
    <section>
      <Jumbotron />
    
      <Section>
        <h2>We offer</h2>
        { categories.map(CategoryCard) }
      </Section>
    </section>
  );
};

export default Home;
