/*
 * action types
 */

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

/*
 * action creators
 */

export class AddToBasket {
  readonly type = ADD_TO_BASKET;
  constructor(public basketItem: BasketItem) {}
}

export class RemoveFromBasket {
  readonly type = REMOVE_FROM_BASKET;
  constructor(public productId: string) {}
}

export type Actions = AddToBasket | RemoveFromBasket;
