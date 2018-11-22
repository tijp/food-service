import React from 'react';
import Section from '../components/Section';
import { connect } from 'react-redux';
import { getBasketItems } from '../stores/basket/reducer';

interface IProps {
  basketItems: string[];
}

const BasketItem: React.SFC<{ item: string }> = ({ item }) => (
  <li>{item}</li>
);

const Basket: React.SFC<IProps> = ({ basketItems }) => (
  <Section>
    <h1>Basket</h1>

    <ul>
      { basketItems.map(item => <BasketItem item={item} />) }
    </ul>
  </Section>
);

const mapStateToProps = (state: RootState) => ({
  basketItems: getBasketItems(state),
});

export default connect(mapStateToProps)(Basket);
