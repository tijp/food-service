import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import { findProduct } from '../assets/products';

const Container = styled.div`
  margin-top: 80px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  height: 400px;
  width: 50%;
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

      <Row>
        <Image src={product.img} />
        <h3>{product.price}</h3>
      </Row>


      <h3>Ingredients</h3>
      <p>Ingredient 1</p>
      <p>Ingredient 2</p>
      <p>Ingredient 3</p>
      <p>Ingredient 4</p>
    </Container>
  );
};

export default Info;
