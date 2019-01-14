import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  color: unset;
  text-decoration: none;
`;

const ImageContainer = styled.div`
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  transform: translateZ(0);

  @media (max-width: 840px) {
    height: 240px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  transition: all 0.3s;

  ${Container}:hover & {
    transform: scale(1.1);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h3`
  margin: 20px 0 10px 0;
  font-size: 1.2em;
  font-weight: 500;
`;

const Price = styled(Title)`
  margin: 0;
  font-size: 1.3em;
  font-weight: 600;
`;

const ListItem = ({ item }: any) => (
  <Container to={`/info/${item.id}`}>
    <ImageContainer>
      <Thumbnail src={item.img} alt="food 1" />
    </ImageContainer>

    <TextContainer>
      <Title>{item.title}</Title>
      <Price>€{item.price.toLocaleString('nl')}</Price>
    </TextContainer>
  </Container>
);

export default ListItem;