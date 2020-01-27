import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { addToCartSuccess, incrementSuccess } from '../../actions/cart';
import { format } from '../../../util/formartCurrency';
import history from '../../../config/history';

function* addToCart(action) {
  const isExistProduct = yield select(state =>
    state.cart.find(product => product.id === action.payload)
  );

  const { data } = yield call(api.get, `/stock/${action.payload}`);
  const stockAmount = data.amount;

  if (isExistProduct) {
    if (isExistProduct.amount + 1 > stockAmount)
      return toast.error(
        'Não temos essa quantidade deste produto em estoque :('
      );
    yield put(incrementSuccess(action.payload));
    history.push('/cart');
  } else {
    const response = yield call(api.get, `products/${action.payload}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: format(response.data.price),
    };
    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* incrementAmount(action) {
  const { data } = yield call(api.get, `/stock/${action.payload}`);
  const stockAmount = data.amount;
  const product = yield select(state =>
    state.cart.find(product => product.id === action.payload)
  );

  product.amount + 1 > stockAmount
    ? toast.error('Não temos essa quantidade deste produto em estoque :(')
    : yield put(incrementSuccess(action.payload));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/INCREMENT_AMOUNT_REQUEST', incrementAmount),
]);
