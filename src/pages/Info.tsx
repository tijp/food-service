import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import { findProduct } from '../assets/mockedProducts';
import Button from '../components/Button';
import { AddToBasket } from '../stores/basket/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Section from '../components/Section';
import { Row } from '../components/Styled/Row';

const Image = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
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

  else {
    const [amount, setAmount] = useState(1);
    return (
      <Section>
        <h1>{product.title}</h1>
        <Image src={product.img} />

        <Row>
          <h2>€{product.price}</h2>

          <Row>
            <NumberInput
              type="number"
              value={amount}
              min={1} max={50}
              onChange={event => setAmount(parseInt(event.target.value))}
            />
            <Button
              text="In Winkelwagen"
              onClick={() => props.addToBasket({ product, amount })}
            />
          </Row>
        </Row>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Section>
    );
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToBasket: (item: BasketItem) => dispatch(new AddToBasket(item)),
});

export default connect(null, mapDispatchToProps)(Info);
