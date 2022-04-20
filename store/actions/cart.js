export const ADD_TO_CART = 'ADD_TO_CART';
export const PLUS_ITEM = 'PLUS_ITEM';
export const MINUS_ITEM = 'MINUS_ITEM';

export const addToCart = meal => {
  return { type: ADD_TO_CART, meal: meal };
};

export const minusItem = meal => {
  return { type: MINUS_ITEM, meal: meal };
};

export const plusItem = meal => {
  return { type: PLUS_ITEM, meal: meal };
};
