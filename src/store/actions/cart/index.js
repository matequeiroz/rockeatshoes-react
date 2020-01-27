export function removeProduct(id) {
  return {
    type: '@cart/REMOVE',
    payload: id,
  };
}

export function decrement(id) {
  return {
    type: '@cart/DECREMENT_AMOUNT',
    payload: id,
  };
}

export function increment(id) {
  return {
    type: '@cart/INCREMENT_AMOUNT',
    payload: id,
  };
}

export function incrementRequest(id) {
  return {
    type: '@cart/INCREMENT_AMOUNT_REQUEST',
    payload: id,
  };
}

export function incrementSuccess(id) {
  return {
    type: '@cart/INCREMENT_AMOUNT_SUCCESS',
    payload: id,
  };
}

export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: product,
  };
}
