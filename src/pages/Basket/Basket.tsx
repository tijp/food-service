import React from 'react';
import Section from '../../components/Section';
import { connect } from 'react-redux';
import { getBasketItems } from '../../stores/basket/reducer';
import styled from 'styled-components';
import BasketItem from './BasketItem';
import Button from '../../components/Button';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;

interface IProps {
  basketItems: BasketItem[];
}

const Basket: React.SFC<IProps> = ({ basketItems }) => (
  <Section>
    <h1>Basket</h1>

    <List>
      {
        basketItems.length === 0 ?
          'Basket is empty' :
          basketItems.map(item => <BasketItem key={item.product.id} item={item} />)
      }
    </List>

    <ButtonContainer>
      <Button text="Bestellen" onClick={() => null} />
    </ButtonContainer>
  </Section>
);

const mapStateToProps = (state: RootState) => ({
  basketItems: getBasketItems(state),
});

export default connect(mapStateToProps)(Basket);
