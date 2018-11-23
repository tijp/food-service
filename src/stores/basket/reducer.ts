import { products } from '../../assets/mockedProducts';
import {
  Actions,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
} from './actions';

const initialState: BasketState = {
  // basket: products.slice(0, 2).map(product => ({ product, amount: 1 })),
  basket: [],
};

const reducer = (state = initialState, action: Actions): BasketState => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const { id } = action.basketItem.product;

      let basket;
      const itemAlreadyInBasket = state.basket.find(item => item.product.id === id);
      if (!itemAlreadyInBasket)
        basket = [...state.basket, action.basketItem];

      else {
        basket = state.basket.map(item => {
          if (item.product.id !== id) return item;
          return {
            ...item,
            amount: item.amount + action.basketItem.amount,
          };
        })
      }

      return { ...state, basket };
    }

    case REMOVE_FROM_BASKET: {
      const basket = state.basket.filter(item => item.product.id !== action.productId);
      return { ...state, basket };
    }

    default: return state;
  }
};

export default reducer;

export const getBasketSize = (state: RootState) => (
  state.basketState.basket.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount, 0
  )
);

export const getBasketItems = (state: RootState) => (
  state.basketState.basket
);
