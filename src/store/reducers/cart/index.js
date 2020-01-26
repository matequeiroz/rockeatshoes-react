import produce from 'immer';
const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          item => item.id === action.payload.id
        );

        if (productIndex >= 0) {
          draftState[productIndex].amount += 1;
        } else {
          draftState.push({ ...action.payload, amount: 1 });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          item => item.id === action.payload
        );

        if (productIndex >= 0) draftState.splice(productIndex, 1);
      });
    case '@cart/DECREMENT_AMOUNT':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          item => item.id === action.payload
        );

        if (productIndex >= 0) {
          if (draftState[productIndex].amount > 1)
            draftState[productIndex].amount -= 1;
        }
      });
    case '@cart/INCREMENT_AMOUNT':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          item => item.id === action.payload
        );

        if (productIndex >= 0) {
          draftState[productIndex].amount += 1;
        }
      });

    default:
      return state;
  }
}
