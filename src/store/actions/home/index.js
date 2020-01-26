export function addToCart(product) {
  return {
    type: '@cart/ADD',
    payload: product,
  };
}
