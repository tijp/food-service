import React from 'react';
import Section from '../../components/Styled/Section';
import { connect } from 'react-redux';
import { getBasketItems, getBasketTotalPrice } from '../../stores/basket/reducer';
import styled from 'styled-components';
import BasketItem from './BasketItem';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TotalPriceLabel = styled.h3`
  display: flex;
  justify-content: flex-end;
`;

interface IProps {
  basketItems: BasketItem[];
  basketTotalPrice: string;
}

const Basket: React.SFC<IProps> = ({ basketItems, basketTotalPrice }) => (
  <Section title="Winkelwagen">
    <List>
      {
        basketItems.length < 1 ?
          'De winkelwagen is leeg' :
          basketItems.map(item => <BasketItem key={item.id} basketItem={item} />)
      }
    </List>

    {
      basketItems.length > 0 &&
        <>
          <TotalPriceLabel>Totaal €{basketTotalPrice}</TotalPriceLabel>

          <ButtonContainer>
            <Link to="/bestellen">
              <Button>Bestellen</Button>
            </Link>
          </ButtonContainer>
        </>
    }
  </Section>
);

const mapStateToProps = (state: RootState) => ({
  basketItems: getBasketItems(state),
  basketTotalPrice: getBasketTotalPrice(state),
});

export default connect(mapStateToProps)(Basket);
