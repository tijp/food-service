import React, { useState } from 'react';
import { ReactComponent as ShoppingCartSVG } from '../assets/icons/shopping-cart.svg';
import styled from 'styled-components';
import COLORS from '../assets/colors';

const BasketQuantity = styled.span`
  position: absolute;
  top: -7px;
  right: -8px;
  padding-right: 4px;
  padding-left: 4px;
  border-radius: 1em;
  background-color: ${COLORS.PRIMARY_COLOR};
  color: #fff;
  text-align: center;
  font-size: .75em;
  line-height: 1.4;
`;

const ShoppingCartIcon = styled(ShoppingCartSVG)`
  /* margin-right: 20px; */
  width: 26px; height: 26px;

  &:hover {
    cursor: pointer;
  }
`;

const ShoppingCart = () => {
  const [basketCount, setBasketCount] = useState(0);

  return (
    <div style={{ position: 'relative', marginRight: 20 }}>
      <ShoppingCartIcon />
      <BasketQuantity>{basketCount}</BasketQuantity>
    </div>
  );
};

export default ShoppingCart;
