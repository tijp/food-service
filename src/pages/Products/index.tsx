import React from 'react';
import Section from '../../components/Styled/Section';
import ShowcaseList from '../../components/ShowcaseList';

import { getProductFromCategory, CATEGORIES } from '../../assets/mockedProducts';

const Products = () => (
  <Section>
    <h1>Products</h1>

    <ShowcaseList name="Category 1" showcaseItems={getProductFromCategory(CATEGORIES.ONE)} />
    <br />
    <ShowcaseList name="Category 2" showcaseItems={getProductFromCategory(CATEGORIES.TWO)} />
  </Section>
);

export default Products;
