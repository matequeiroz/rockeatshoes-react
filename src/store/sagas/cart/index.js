import { call, put, select, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess, increment } from '../../actions/cart';
import { format } from '../../../util/formartCurrency';

function* addToCart(action) {
  const isExistProduct = yield select(state =>
    state.cart.find(product => product.id === action.payload)
  );

  if (isExistProduct) {
    yield put(increment(action.payload));
  } else {
    const response = yield call(api.get, `products/${action.payload}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: format(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
