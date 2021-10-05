const postsReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {data: action?.payload};
    default:
      return state;
  }
};

export default postsReducer;
