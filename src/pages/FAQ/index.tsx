import React from 'react';
import Section from '../../components/Styled/Section';

type FAQ = {
  q: string;
  a: string;
}

const faqs: FAQ[] = [{
  q: '???',
  a: 'gfui',
}, {
  q: 'hdhg',
  a: 'jyrte',
}, {
  q: 'hhtrh',
  a: 'hdfbe',
}]

const FAQItem = (faq: FAQ) => (
  <div key={faq.q}>
    <h3>{faq.q}</h3>
    <p>{faq.a}</p>
  </div>
);

const FAQ = () => (
  <Section>
    <h1>Frequently Asked Questions</h1>

    { faqs.map(FAQItem) }
  </Section>
);

export default FAQ;
