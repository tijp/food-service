import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';
import { Dispatch } from 'redux';
import { RemoveFromBasket, SetProductAmount } from '../../stores/basket/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from '../../components/Styled/Row';
import SelectField from '../../components/FormItems/SelectField';

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c3c1bc;
  margin-bottom: 30px;
`;

const Thumbnail = styled.img`
  width: 80px;
  border-radius: 3px;
`;

const TitleLink = styled(Link)`
  font-weight: 600;
  color: unset;
  text-decoration: none;
  padding: 2px 10px;
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
  setProductAmount: (productId: string, amount: number) => void;
  removeFromBasket: (productId: string) => void;
}

const BasketItem: React.SFC<IProps> = ({ item, setProductAmount, removeFromBasket }) => {
  const { id, title } = item.product;
  const onChange = (event: FormEvent<HTMLSelectElement>) => {
    const amount = Number.parseInt(event.currentTarget.value);
    setProductAmount(id, amount);
  };

  return (
    <ListItem>
      <Row justifyContent="flex-start" alignItems="flex-start">
        <Thumbnail src={item.product.img} />
        <TitleLink to={`/info/${id}`}>{title}</TitleLink>
      </Row>

      <Row justifyContent="flex-end">
        <SelectField value={item.amount} onChange={onChange} />
        {/* {item.amount} */}
        <Delete onClick={() => removeFromBasket(id)} />
      </Row>

      <p style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 700 }}>
        €{(item.amount * item.product.price).toFixed(2)}</p>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProductAmount: (productId: string, amount: number) => dispatch(new SetProductAmount(productId, amount)),
  removeFromBasket: (productId: string) => dispatch(new RemoveFromBasket(productId)),
});

export default connect(null, mapDispatchToProps)(BasketItem);
