import React from 'react';

import Section from '../../components/Styled/Section';
import Button from '../../components/Button';

const FinishedCheckout = () => (
  <Section title="Bedankt voor uw bestelling">
    <h2>Uw bestelling is met succes verwerkt</h2>

    <Button>Ga terug naar /home</Button>
  </Section>
);

export default FinishedCheckout;
