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
