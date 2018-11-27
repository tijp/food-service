import {
  Actions,
  ADD_TO_BASKET,
  SET_PRODUCT_AMOUNT,
  REMOVE_FROM_BASKET,
} from './actions';
import { preciseAddition } from '../../utils/utils';

// Basket Type Guard
function isBasket(obj: any): obj is BasketItem[] {
  const isBasket = Array.isArray(obj) && obj.every((item: any) => {
    return item.product !== undefined && item.amount !== undefined;
  });

  console.log(!isBasket);
  if (!isBasket) localStorage.removeItem('basket');
  return isBasket;
}

const getPersistedBasket = () => {
  const localStorageBasket = localStorage.getItem('basket');
  
  let basket: BasketItem[] = [];
  if (localStorageBasket) {
    try {
      const parsedBasket = JSON.parse(localStorageBasket);
      if (isBasket(parsedBasket))
        basket = parsedBasket;
    } catch {
      localStorage.removeItem('basket');
    }
  }

  return basket;
}


const initialState: BasketState = {
  // basket: products.slice(0, 2).map(product => ({ product, amount: 1 })),
  basket: getPersistedBasket(),
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

      localStorage.setItem('basket', JSON.stringify(basket));
      return { ...state, basket };
    }

    case SET_PRODUCT_AMOUNT: {
      const basket = state.basket.map(item => {
        if (item.product.id !== action.productId) return item;
        return {
          ...item,
          amount: action.amount,
        }
      });

      localStorage.setItem('basket', JSON.stringify(basket));
      return { ...state, basket };
    }

    case REMOVE_FROM_BASKET: {
      const basket = state.basket.filter(item => item.product.id !== action.productId);
      localStorage.setItem('basket', JSON.stringify(basket));
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

export const getBasketTotalPrice = (state: RootState) => {
  const totalPrice = state.basketState.basket.reduce(
    (accumulator, currentValue) => {
      const newValue = (currentValue.amount * currentValue.product.price);
      return preciseAddition(accumulator, newValue);
    }, 0
  );

  const totalPriceTwoDecimals = totalPrice.toFixed(2);
  return totalPriceTwoDecimals;
};

export const getBasketItems = (state: RootState) => (
  state.basketState.basket
);
