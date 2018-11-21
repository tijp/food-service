import React from 'react';

import ShowcaseList from '../../components/ShowcaseList';
import { getProductFromCategory, CATEGORIES } from '../../assets/products';
import Jumbotron from './Jumbotron';
import styled from 'styled-components';

const Padding = styled.div`
  padding: 16px;
`;

const Home = () => (
  <section>
    <Jumbotron />
  
    <Padding>
      <ShowcaseList name="Category 1" showcaseItems={getProductFromCategory(CATEGORIES.ONE)} />
      <ShowcaseList name="Category 2" showcaseItems={getProductFromCategory(CATEGORIES.TWO)} />
    </Padding>
  </section>
);

export default Home;
