import React from 'react';
import { ReactComponent as ShoppingCartSVG } from '../../assets/icons/shopping-cart.svg';
import styled from 'styled-components';
import COLORS from '../../assets/colors';
import { getBasketSize } from '../../stores/basket/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  position: relative;
  margin-right: 20px;
`;

const BasketQuantity = styled.span`
  position: absolute;
  top: -7px;
  right: -9px;
  padding-right: 4px;
  padding-left: 4px;
  border-radius: 1em;
  background-color: ${COLORS.PRIMARY_COLOR};
  color: #fff;
  text-align: center;
  font-size: .75em;
  line-height: 1.4;
  min-width: 8px;
`;

const ShoppingCartIcon = styled(ShoppingCartSVG)`
  /* margin-right: 20px; */
  width: 26px; height: 26px;

  &:hover {
    cursor: pointer;
  }
`;

interface IProps {
  basketSize: number;
}

const BasketButton: React.SFC<IProps> = ({ basketSize }) => (
  <Container to="/winkelwagen">
    <ShoppingCartIcon />
    { basketSize > 0 &&
      <BasketQuantity>{basketSize}</BasketQuantity> }
  </Container>
);

const mapStateToProps = (state: RootState) => ({
  basketSize: 
  getBasketSize(state),
})

export default connect(mapStateToProps)(BasketButton);
