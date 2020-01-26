import produce from 'immer';
const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD':
      const nextState = produce(state, draftState => {
        const productIndex = draftState.findIndex(
          item => item.id === action.payload.id
        );

        if (productIndex >= 0) {
          draftState[productIndex].amount += 1;
        } else {
          draftState.push({ ...action.payload, amount: 1 });
        }
      });

      return nextState;
    default:
      return state;
  }
}
