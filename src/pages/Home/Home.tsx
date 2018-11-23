import React from 'react';

import ShowcaseList from '../../components/ShowcaseList';
import { getProductFromCategory, CATEGORIES } from '../../assets/mockedProducts';
import Jumbotron from './Jumbotron';
import Section from '../../components/Section';

const Home = () => (
  <section>
    <Jumbotron />
  
    <Section>
      <ShowcaseList name="Category 1" showcaseItems={getProductFromCategory(CATEGORIES.ONE)} />
      <br />
      <ShowcaseList name="Category 2" showcaseItems={getProductFromCategory(CATEGORIES.TWO)} />
    </Section>
  </section>
);

export default Home;
