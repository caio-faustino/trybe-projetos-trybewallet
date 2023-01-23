import { combineReducers } from 'redux';
import reducerUser from './user';

const reducerRoot = combineReducers({ user: reducerUser });

export default reducerRoot;
