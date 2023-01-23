const INITIAL_STATE = {
  error: '',
  editor: false,
  currencies: [],
  idToEdit: 0,
  expenses: [],
};

function reducerWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LIST_BEGIN':
    return {
      ...state,
    };
  case 'LIST_SUCCESS':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'LIST_FAILURE':
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
}

export default reducerWallet;
