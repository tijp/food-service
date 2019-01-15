import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import { findProduct } from '../../assets/products';
import Button from '../../components/Button';
import { AddToBasket } from '../../stores/basket/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Section from '../../components/Styled/Section';
import { Row, Col } from '../../components/Styled/Layout';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 48px;
`;

const Image = styled.img`
  height: 300px;
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  object-fit: cover;
`;

// const StyledCol = styled(Col)`
//   flex: 1;
//   align-items: flex-end;
// `;
const StyledCol = styled.div`
  /* flex: 1;
  align-items: flex-end; */

  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Description = styled.p`
  /* font-size: 19px; */
  margin: 0;
`;

const NumberInput = styled.input`
  width: 35px; height: 31px;
  padding: 5px;
  margin-right: 5px;
  font-size: 18px;
  font-family: Montserrat;
  border: solid #ccc 1px;
  border-radius: 6px;
  text-align: center;
`;

interface IProps extends RouteComponentProps<{ id: string }> {
  addToBasket(item: BasketItem): void;
}

const Info: React.SFC<IProps> = props => {
  const product = findProduct(props.match.params.id);
  if (!product) {
    props.history.push('/');
    return null;
  }

  const renderPrices = (
    product.prices.map(priceOption => {
      const [amount, setAmount] = useState(1);

      return (
        <Row key={priceOption.id} justifyContent="space-between" alignItems="flex-end">
          <h3>{priceOption.description} - €{priceOption.price}</h3>

          <div>
            <NumberInput
              type="number"
              value={amount}
              min={1} max={50}
              onChange={event => setAmount(parseInt(event.target.value))}
            />
            <Button
              text="In Winkelwagen"
              onClick={() => {
                props.addToBasket({
                  id: `${product.id}-${priceOption.id}`,
                  productId: product.id,
                  priceId: priceOption.id,
                  amount,
                });
              }}
            />
          </div>
        </Row>
      );
    })
  );

  return (
    <Section title={product.title}>
      <Grid>
        <Image src={product.img} />

        <StyledCol>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>

          <div>{ renderPrices }</div>

        </StyledCol>
      </Grid>
    </Section>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToBasket: (item: BasketItem) => dispatch(new AddToBasket(item)),
});

export default connect(null, mapDispatchToProps)(Info);
