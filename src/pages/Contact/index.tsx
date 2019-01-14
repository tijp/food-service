import React from 'react';
import GoogleMaps from '../../components/GoogleMaps';
import Section from '../../components/Styled/Section';

const Contact = () => (
  <Section title="Contact">
    <h3>E-mail</h3>
    <a href="mailto:tim.ijpenga@gmail.com">tim.ijpenga@gmail.com</a>
    <br /><br /><br />

    <h3>Adres</h3>
    <p>Henri Duntantlaan 35</p>
    <p>3434 CJ Nieuwegein</p>
    <br />

    <GoogleMaps />
  </Section>
);

export default Contact;
