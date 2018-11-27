import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  name: string;
  showcaseItems: Product[];
}

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 32px;
`;

const ListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  color: unset;
  text-decoration: none;
`;

const ImageContainer = styled.div`
  height: 220px;
  border-radius: 4px;
  overflow: hidden;
  transform: translateZ(0);
`;

const Thumbnail = styled.img`
  width: 100%;
  transition: all 0.3s;

  ${ListItem}:hover & {
    transform: scale(1.1);
  }
`;

const CategoryTitle = styled.h4`
  margin: 24px 0;
  font-size: calc(16px + 2vmin);
  font-weight: 800;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const ItemTitle = styled.h5`
  margin: 12px 6px;
  font-size: 20px;
  font-weight: 500;
  `;

const Price = styled(ItemTitle)`
  font-size: 22px;
  font-weight: 600;
`;

const ShowcaseListItem = ({ item }: any) => (
  <ListItem to={`/info/${item.id}`}>
    <ImageContainer>
      <Thumbnail src={item.img} alt="food 1" />
    </ImageContainer>

    <TextContainer>
      <ItemTitle>{item.title}</ItemTitle>
      <Price>€{item.price.toLocaleString('nl')}</Price>
    </TextContainer>
  </ListItem>
)

const ShowcaseList: React.SFC<IProps> = ({ name, showcaseItems }) => (
  <>
    <CategoryTitle>{name}</CategoryTitle>
    <Row>
      { showcaseItems.map(item => <ShowcaseListItem key={item.title} item={item} />) }
    </Row>
  </>
);

export default ShowcaseList;
