/*
 * action types
 */

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const SET_PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT';

/*
 * action creators
 */

export class AddToBasket {
  readonly type = ADD_TO_BASKET;
  constructor(public basketItem: BasketItem) {}
}

export class RemoveFromBasket {
  readonly type = REMOVE_FROM_BASKET;
  constructor(public basketId: string) {}
}

export class SetProductAmount {
  readonly type = SET_PRODUCT_AMOUNT;
  constructor(public basketId: string, public amount: number) {}
}

export type Actions = AddToBasket | RemoveFromBasket | SetProductAmount;
