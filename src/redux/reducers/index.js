import { combineReducers } from 'redux';
import reducerUser from './user';
import reducerWallet from './wallet';

const reducerRoot = combineReducers({ user: reducerUser, wallet: reducerWallet });

export default reducerRoot;
