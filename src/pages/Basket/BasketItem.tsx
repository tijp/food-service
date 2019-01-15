import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';
import { Dispatch } from 'redux';
import { RemoveFromBasket, SetProductAmount } from '../../stores/basket/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from '../../components/Styled/Layout';
import SelectField from '../../components/FormItems/SelectField';
import { findProduct } from '../../assets/products';

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c3c1bc;
  margin-bottom: 30px;
`;

const Thumbnail = styled.img`
  width: 40%;
  max-width: 180px;
  max-height: 120px;
  border-radius: 3px;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  padding: 6px 15px;
`;

const TitleLink = styled(Link)`
  font-size: 21px;
  font-weight: 600;
  color: unset;
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
  basketItem: BasketItem;
  setProductAmount: (basketId: string, amount: number) => void;
  removeFromBasket: (basketId: string) => void;
}

const BasketItem: React.SFC<IProps> = ({ basketItem, setProductAmount, removeFromBasket }) => {
  const product = findProduct(basketItem.productId);
  if (!product) return null;

  const { id, title } = product;
  const priceObject = product.prices.find(price => price.id === basketItem.priceId);
  if (!priceObject) return null;
  const totalPrice = (basketItem.amount * priceObject.price).toFixed(2);

  const onChange = (event: FormEvent<HTMLSelectElement>) => {
    const amount = Number.parseInt(event.currentTarget.value);
    setProductAmount(basketItem.id, amount);
  };

  return (
    <ListItem>
      <Row justifyContent="flex-start" alignItems="flex-start">
        <Thumbnail src={product.img} />

        <TitleContainer>
          <TitleLink to={`/info/${id}`}>{title}</TitleLink>
          <p>{priceObject.description}</p>
        </TitleContainer>
      </Row>

      <Row justifyContent="flex-end">
        <SelectField value={basketItem.amount} onChange={onChange} />
        <Delete onClick={() => removeFromBasket(basketItem.id)} />
      </Row>

      <p style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 700 }}>
        €{totalPrice}</p>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProductAmount: (basketId: string, amount: number) => dispatch(new SetProductAmount(basketId, amount)),
  removeFromBasket: (basketId: string) => dispatch(new RemoveFromBasket(basketId)),
});

export default connect(null, mapDispatchToProps)(BasketItem);
