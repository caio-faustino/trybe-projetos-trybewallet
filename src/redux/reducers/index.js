import { combineReducers } from 'redux';
import wallet from './wallet';
import user from './user';

const baseReducer = combineReducers({
  user,
  wallet,
});

export default baseReducer;
