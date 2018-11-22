import {
  Actions,
  ADD_TO_BASKET
} from './actions';

const initialState: BasketState = {
  basket: [],
};

const reducer = (state = initialState, action: Actions): BasketState => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const basket = [...state.basket, action.product];
      return { ...state, basket };
    }

    default: return state;
  }
};

export default reducer;

export const getBasketSize = (state: RootState) => (
  state.basketState.basket.length
);

export const getBasketItems = (state: RootState) => (
  state.basketState.basket
);
