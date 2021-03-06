const postsReducer = (
  state = {data: null, recPosts: null, searchPosts: null, isLoading: false},
  action,
) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {...state, data: action?.payload};
    case 'GET_REC_POSTS':
      return {...state, recPosts: action?.payload, isLoading: false};
    case 'GET_REC_POSTS_v2':
      return {...state, searchPosts: action?.payload, isLoading: false};
    case 'ENABLE_LOADING':
      return {...state, isLoading: true};
    case 'DISABLE_LOADING':
      return {...state, isLoading: false};
    case 'LIKE':
      console.log("state.data",state.data.data)
      return {
        ...state,
        data: state.data.data.map(post =>
          post._id === action.payload._id ? action.payload : post,
        ),
      };
    default:
      return state;
  }
};

export default postsReducer;
