/*
 * action types
 */

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const SET_PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';

/*
 * action creators
 */

export class AddToBasket {
  readonly type = ADD_TO_BASKET;
  constructor(public basketItem: BasketItem) {}
}

export class SetProductAmount {
  readonly type = SET_PRODUCT_AMOUNT;
  constructor(public basketId: string, public amount: number) {}
}

export class RemoveFromBasket {
  readonly type = REMOVE_FROM_BASKET;
  constructor(public basketId: string) {}
}

export class ClearBasket {
  readonly type = CLEAR_BASKET;
}

export type Actions = AddToBasket | SetProductAmount | RemoveFromBasket | ClearBasket;
