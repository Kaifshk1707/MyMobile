import { combineReducers, createStore } from 'redux';
import { reducer as cartReducer } from './reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
