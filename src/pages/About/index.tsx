import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Styled/Section';

const Text = styled.p`
  max-width: 600px;
  line-height: 1.5;
`;

const About = () => (
  <Section title="Over ons">
    <Text>
      Mijn naam is Els IJpenga-Koppers, ik ben 51 jaar oud en al bijna 25 jaar gelukkig getrouwd met mijn man Jan. We hebben samen twee zoons. Ik ben graag bezig met het verzorgen van eten en de garnering is helemaal mijn ding. Nu de kinderen groter worden en mijn mantelzorg is geëindigd, is het tijd voor een nieuwe uitdaging! Op aanraden van mijn zoons ga ik deze uitdaging aan en ik heb er erg veel zin in!!
    </Text>
  </Section>
);

export default About;
