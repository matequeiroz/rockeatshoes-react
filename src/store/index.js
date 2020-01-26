import { createStore } from 'redux';
import reducers from './reducers/loaderReducers';

const store = createStore(reducers);

export default store;
