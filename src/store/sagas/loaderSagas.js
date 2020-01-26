import { all } from 'redux-saga/effects';

import cartSagas from './cart';

export default function* rootSagas() {
  return yield all([cartSagas]);
}
