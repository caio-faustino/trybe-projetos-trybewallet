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
  case 'DELETE_INFO':
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expenseId),
    };
  case 'SEND_EDIT':
    return {
      ...state,
      editor: action.edit,
      idToEdit: action.expenseId,
    };
  case 'EDIT_INFO':
    return { ...state,
      editor: false,
      expenses: state.expenses.map(
        (expense) => (expense.id === action.expenseId
          ? { ...action.editedExpense, exchangeRates: action.currencies, id: expense.id }
          : expense),
      ),
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
