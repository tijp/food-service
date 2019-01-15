import {
  Actions,
  ADD_TO_BASKET,
  SET_PRODUCT_AMOUNT,
  REMOVE_FROM_BASKET,
} from './actions';
import { preciseAddition } from '../../utils/utils';
import { findProduct, findPrice } from '../../assets/products';

// Basket Type Guard
function isBasket(obj: any): obj is BasketItem[] {
  const isBasket = Array.isArray(obj) && obj.every((item: any) => {
    return item.id !== undefined && item.productId !== undefined &&
      item.priceId !== undefined && item.amount !== undefined;
  });

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
      const { id } = action.basketItem;

      let basket;
      const itemAlreadyInBasket = state.basket.find(item => item.id === id);
      if (!itemAlreadyInBasket)
        basket = [...state.basket, action.basketItem];

      else {
        basket = state.basket.map(item => {
          if (item.id !== id) return item;
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
        if (item.id !== action.basketId) return item;
        return {
          ...item,
          amount: action.amount,
        }
      });

      localStorage.setItem('basket', JSON.stringify(basket));
      return { ...state, basket };
    }

    case REMOVE_FROM_BASKET: {
      const basket = state.basket.filter(item => item.id !== action.basketId);
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
      const priceObject = findPrice(currentValue.productId, currentValue.priceId);
      if (!priceObject) return 0;

      const newValue = (currentValue.amount * priceObject.price);
      return preciseAddition(accumulator, newValue);
    }, 0
  );

  const totalPriceTwoDecimals = totalPrice.toFixed(2);
  return totalPriceTwoDecimals;
  return 'nope';
};

export const getBasketItems = (state: RootState) => (
  state.basketState.basket
);
