const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD':
      return [
        ...state,
        {
          ...action.payload,
          amount: 1,
        },
      ];
    default:
      return state;
  }
}
