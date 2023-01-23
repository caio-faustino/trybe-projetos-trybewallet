const INITIAL_STATE = {
  error: '',
  expenses: [],
  currencies: [],
  editor: false,
  idToEdit: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
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

export default walletReducer;
