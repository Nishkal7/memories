const authReducer = (state = {authData: null}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {authData: action?.payload};
    case 'LOGOUT':
      return {authData: null};
    default:
      return state;
  }
};

export default authReducer;
