import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import { findProduct } from '../assets/products';
import Button from '../components/Button';
import { AddToBasket } from '../stores/basket/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Section from '../components/Section';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

interface IProps extends RouteComponentProps<{ id: string }> {
  addToBasket(product: string): void;
}

const Info: React.SFC<IProps> = props => {
  const product = findProduct(props.match.params.id);
  if (!product) {
    props.history.push('/');
    return null;
  }

  else return (
    <Section>
      <h1>{product.title}</h1>

      <Image src={product.img} />

      <Row>
        <h3>€{product.price}</h3>

        <input type="number" defaultValue="1" />
        <Button text="Bestellen" onClick={() => props.addToBasket('test')} />
      </Row>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Section>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToBasket: (product: string) => dispatch(new AddToBasket(product)),
});

export default connect(null, mapDispatchToProps)(Info);
