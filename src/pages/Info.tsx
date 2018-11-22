import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import { findProduct } from '../assets/products';
import Button from '../components/Button';

const Container = styled.section`
  padding: 20px;
`;

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

const Info: React.SFC<RouteComponentProps<{ id: string }>> = props => {
  const product = findProduct(props.match.params.id);
  if (!product) {
    props.history.push('/');
    return null;
  }

  else return (
    <Container>
      <h1>{product.title}</h1>

      <Image src={product.img} />

      <Row>
        <h3>€{product.price}</h3>

        <input type="number" value={1} />
        <Button text="Bestellen" />
      </Row>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Container>
  );
};

export default Info;
