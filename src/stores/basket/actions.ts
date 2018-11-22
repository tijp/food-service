/*
 * action types
 */

export const ADD_TO_BASKET = 'ADD_TO_BASKET';

/*
 * action creators
 */

export class AddToBasket {
  readonly type = ADD_TO_BASKET;
  constructor(public product: string) {}
}

export type Actions = AddToBasket;
