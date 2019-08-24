import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Styled/Section';

import overmij from 'assets/images/over-mij.jpg';
import verjaardag from 'assets/images/verjaardag.jpg';
import visitekaartje from 'assets/images/visitekaartje.jpg';
import resultaat from 'assets/images/resultaat.jpg';
import saladeMetDoos from 'assets/images/salade-met-doos.jpeg';

const Text = styled.p`
  max-width: 600px;
  line-height: 1.5;
`;

const About = () => (
  <Section title="Over mij">
    <Text>
      Mijn naam is Els IJpenga-Koppers, ik ben 51 jaar oud en al 25 jaar gelukkig getrouwd met mijn man Jan.
      We hebben samen twee zoons.
      Ik ben graag bezig met het verzorgen van eten en de garnering is helemaal mijn ding.
      Nu de kinderen groter worden en mijn mantelzorg is geëindigd, is het tijd voor een nieuwe uitdaging!
      Op aanraden van mijn zoons ga ik deze uitdaging aan en ik heb er erg veel zin in!!
    </Text>

    <img src={overmij} width={'70%'} alt="over mij" /><br /><br />
    <img src={verjaardag} width={'70%'} alt="verjaardag" /><br /><br />
    <img src={visitekaartje} width={'70%'} alt="visitekaartje" />
    <img src={resultaat} width={'70%'} alt="resultaat" /><br /><br />
    <img src={saladeMetDoos} width={'70%'} alt="salade met doos" /><br /><br />
  </Section>
);

export default About;
