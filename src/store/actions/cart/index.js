export function removeProduct(id) {
  return {
    type: '@cart/REMOVE',
    payload: id,
  };
}
