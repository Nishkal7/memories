const postsReducer = (
  state = {data: null, recPosts: null, isLoading: false},
  action,
) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {...state, data: action?.payload};
    case 'GET_REC_POSTS':
      return {...state, recPosts: action?.payload, isLoading: false};
    case 'ENABLE_LOADING':
      return {...state, isLoading: true};
    case 'DISABLE_LOADING':
      return {...state, isLoading: false};
    default:
      return state;
  }
};

export default postsReducer;
