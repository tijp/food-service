import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';
import { Dispatch } from 'redux';
import { RemoveFromBasket } from '../../stores/basket/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from '../../components/Styled/Row';

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleLink = styled(Link)`
  color: unset;
  padding: 14px 0;
  text-decoration: none;
`;

const Delete = styled(DeleteSVG)`
  width: 20px; height: 20px;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }
`;

interface IProps {
  item: BasketItem;
  removeFromBasket: (productId: string) => void;
}

const BasketItem: React.SFC<IProps> = ({ item, removeFromBasket }) => {
  const { id, title } = item.product;
  return (
    <ListItem>
      <TitleLink to={`/info/${id}`}>{title}</TitleLink>

      <Row>
        <p>{item.amount}</p>
        <Delete onClick={() => removeFromBasket(id)} />
      </Row>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeFromBasket: (productId: string) => dispatch(new RemoveFromBasket(productId)),
});

export default connect(null, mapDispatchToProps)(BasketItem);
