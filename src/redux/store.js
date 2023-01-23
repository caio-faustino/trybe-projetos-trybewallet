import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import reducerRoot from './reducers/index';

const store = createStore(
  reducerRoot,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
if (window.Cypress) {
  window.store = store;
}
export default store;
