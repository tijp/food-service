import React, { Fragment } from 'react';
// import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import { getProductsFromCategory } from '../../assets/products';
import { AddToBasket } from '../../stores/basket/actions';
import Section from '../../components/Styled/Section';
import { Row } from '../../components/Styled/Layout';
// import AddedToCartModal from './AddedToCartModal';

interface IProps extends RouteComponentProps<{ category: string }> {
  addToBasket(item: BasketItem): void;
}

const Info: React.SFC<IProps> = props => {
  const products = getProductsFromCategory(props.match.params.category);
  // const [showModal, setShowModal] = useState(false);
  // const [amount, setAmount] = useState(1);

  if (!products || products.length === 0) {
    props.history.push('/');
    return null;
  }

  // const [showModal, setShowModal] = useState(false);
  // const onModalClose = () => {
  //   setShowModal(false);
  //   document.getElementById('root')!.style.filter = 'none';
  // };

  // const renderPrices = product.prices.map(priceOption => {
  //   // const [amount, setAmount] = useState(1);
  //   // const onSubmit = () => {
  //   //   props.addToBasket({
  //   //     id: `${product.id}-${priceOption.id}`,
  //   //     productId: product.id,
  //   //     priceId: priceOption.id,
  //   //     title: product.title,
  //   //     description: priceOption.description,
  //   //     amount,
  //   //   });

  //   //   setShowModal(true);
  //   //   document.getElementById('root')!.style.filter = 'blur(.2em)';
  //   // };

  //   return (
  //     <Prices key={priceOption.id}>
  //       <h3 style={{ width: 180 }}>
  //         {priceOption.description && `${priceOption.description} - `}€
  //         {priceOption.price}
  //       </h3>

  //       {/* <div>
  //         <NumberInput
  //           type="number"
  //           value={amount}
  //           min={1}
  //           max={50}
  //           onChange={event => setAmount(parseInt(event.target.value))}
  //         />
  //         <AddToCartButton small onClick={onSubmit}>
  //           In winkelwagen
  //         </AddToCartButton>
  //       </div> */}
  //     </Prices>
  //   );
  // });

  return (
    <Section>
      <br />
      <OrderContainer>
        Wil je een salade of hapjes bestellen?
        Neem dan telefonisch (06-41854099) of via de mail (slaatjesvanels@gmail.com) contact met ons op.
      </OrderContainer>
      <br /><br /><br />

      { products.map(product => (
        <Fragment key={product.id}>
          <Grid>
            <Image src={product.img} />
            <StyledCol>
              <h1 style={{ marginTop: 0 }}>{product.title}</h1>
              <Description>{product.description}</Description>
              { product.prices.map(priceOption => (
                <Prices key={priceOption.id}>
                  <h3 style={{ margin: 0 }}>
                    {priceOption.description}:&emsp;
                    €{priceOption.price.toFixed(2)}
                  </h3>
                </Prices>
              ))}
            </StyledCol>
          </Grid>

          <br /><br /><br /><br /><br />
        </Fragment>
      ))}
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

const OrderContainer = styled.div`
  /* width: 100%; */
  padding: 24px 30px;
  border-radius: 8px;
  background: lightgoldenrodyellow;
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
  flex: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

// const NumberInput = styled.input`
//   width: 35px;
//   height: 30px;
//   padding: 5px;
//   margin-right: 5px;
//   font-size: 18px;
//   font-family: Montserrat;
//   border: solid #ccc 1px;
//   border-radius: 6px;
//   text-align: center;
// `;

// const AddToCartButton = styled(Button)`
//   padding: 0 15px;
// `;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToBasket: (item: BasketItem) => dispatch(new AddToBasket(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Info);
