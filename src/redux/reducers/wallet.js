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
      currencies: Object.keys(action.currencies),
    };
  case 'LIST_FAILURE':
    return {
      ...state,
      error: action.error,
    };
  case 'SAVE_INFO':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.payload.wallet,
          exchangeRates: action.payload.currencies,
        },
      ],
    };
  default:
    return state;
  }
}

export default walletReducer;
