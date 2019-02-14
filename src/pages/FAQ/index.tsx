import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Styled/Section';

type FAQ = {
  q: string;
  a: string;
}

const faqs: FAQ[] = [{
  q: 'Kan mijn bestelling bezorgd worden?',
  a: 'Nee, helaas is dit niet mogelijk. Dit project is te klein om bezorging mogelijk te maken.',
}, {
  q: 'Waarom moet ik contant betalen?',
  a: 'Omdat dit een hobby is, is dit geen officieel bedrijf. Om online betalen mogelijk te maken heb je een KvK nummer nodig. Dit heb ik (nog) niet.',
}, {
  q: 'Ik wil graag een schaal met hapjes bestellen, maar wil zelf de verschillende hapjes bepalen.',
  a: 'Dit is geen probleem. Vermeldt dit tijdens het bestellen in de opmerkingen of neem contact met mij op.',
}, {
  q: 'Ik kan enkel salades bestellen voor 4 of 8 personen, maar wil graag voor x aantal personen bestellen.',
  a: 'Als u contact met mij op neemt zal ik de bestelling op maat maken.',
}];

const Item = styled.div`
  padding-bottom: 20px;
`;

const FAQItem = (faq: FAQ) => (
  <Item key={faq.q}>
    <h3>{faq.q}</h3>
    <p>{faq.a}</p>
  </Item>
);

const FAQ = () => (
  <Section title="Vragen">
    { faqs.map(FAQItem) }

    <h4>Staat je vraag er niet tussen? Stuur ons een berichtje en wij zullen zo snel mogelijk antwoorden.</h4>
  </Section>
);

export default FAQ;
