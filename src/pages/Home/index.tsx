import React from 'react';

import Section from '../../components/Styled/Section';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { products } from '../../assets/products';
import ShowcaseList from '../../components/List';

const Jumbo = styled.div`
  padding: 100px 0 30px 0;
  font-size: 22px;

  @media (max-width: 623px) {
    padding-top: 10px;
  }
`;

const JumboText = styled.h1`
  font-weight: 500;

  @media (max-width: 840px) {
    font-size: 1.85em;
  }
`;

const Home = () => (
  <Section>
    <Jumbo>
      <JumboText>
        Ontdek onze zelfgemaakte<br /><b>Party salades</b> & <b>Hapjes</b>
      </JumboText>
    </Jumbo>

    <br /><br />

    <ShowcaseList items={products} />
  </Section>
);

export default Home;
