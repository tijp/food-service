import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

interface IProps {
  name?: string;
  items: Product[];
}

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(331px, 1fr));
  grid-gap: 48px;

  @media (max-width: 1088px) {
    grid-gap: 32px;
  }

  @media (max-width: 840px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const CategoryTitle = styled.h2`
  margin: 24px 0;
  font-weight: 800;
`;

const ShowcaseList: React.SFC<IProps> = ({ name, items }) => (
  <>
    { name && <CategoryTitle id={name}>{name}</CategoryTitle> }
    <Row>
      { items.map(item => <ListItem key={item.title} item={item} />) }
    </Row>
  </>
);

export default ShowcaseList;
