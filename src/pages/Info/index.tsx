import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import { findProduct } from '../../assets/products';
import Button from '../../components/Button';
import { AddToBasket } from '../../stores/basket/actions';
import Section from '../../components/Styled/Section';
import { Row } from '../../components/Styled/Layout';
import AddedToCartModal from './AddedToCartModal';

interface IProps extends RouteComponentProps<{ id: string }> {
  addToBasket(item: BasketItem): void;
}

const Info: React.SFC<IProps> = props => {
  const product = findProduct(props.match.params.id);
  if (!product) {
    props.history.push('/');
    return null;
  }

  const [showModal, setShowModal] = useState(false);
  const onModalClose = () => {
    setShowModal(false);
    document.getElementById('root')!.style.filter = 'none';
  }

  const renderPrices = (
    product.prices.map(priceOption => {
      const [amount, setAmount] = useState(1);
      const onSubmit = () => {
        props.addToBasket({
          id: `${product.id}-${priceOption.id}`,
          productId: product.id,
          priceId: priceOption.id,
          title: product.title,
          description: priceOption.description,
          amount,
        });

        setShowModal(true);
        document.getElementById('root')!.style.filter = 'blur(.2em)';
      }

      return (
        <Prices key={priceOption.id}>
          <h3 style={{ width: 180 }}>
            {priceOption.description && `${priceOption.description} - `}
            €{priceOption.price}
          </h3>

          <div>
            <NumberInput
              type="number" value={amount} min={1} max={50}
              onChange={event => setAmount(parseInt(event.target.value))}
            />
            <AddToCartButton
              small
              text="In Winkelwagen"
              onClick={onSubmit}
            />
          </div>
        </Prices>
      );
    })
  );

  return (
    <Section title={product.title}>
      <Grid>
        <Image src={product.img} />

        <StyledCol>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>

          <div>{ renderPrices }</div>

        </StyledCol>
      </Grid>

      <AddedToCartModal showModal={showModal} closeModal={onModalClose} />
    </Section>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 48px;

  @media (max-width: 520px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

const Image = styled.img`
  height: 300px;
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  object-fit: cover;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Description = styled.p`
  font-size: 19px;
  margin: 0 0 28px 0;
`;

const Prices = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const NumberInput = styled.input`
  width: 35px; height: 30px;
  padding: 5px;
  margin-right: 5px;
  font-size: 18px;
  font-family: Montserrat;
  border: solid #ccc 1px;
  border-radius: 6px;
  text-align: center;
`;

const AddToCartButton = styled(Button)`
  padding: 0 15px;
`;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToBasket: (item: BasketItem) => dispatch(new AddToBasket(item)),
});

export default connect(null, mapDispatchToProps)(Info);
