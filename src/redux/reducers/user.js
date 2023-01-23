const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_ACTION':
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default reducerUser;
