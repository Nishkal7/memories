import * as api from '../api/index';

export const getPosts = page => async dispatch => {
  try {
    const {data} = await api.fetchPosts(page);
    dispatch({type: 'GET_POSTS', payload: data});
  } catch (error) {
    dispatch({type: 'GET_POSTS', payload: null});
  }
};

export const getPostsBySearch = searchQuery => async dispatch => {
  try {
    dispatch({type: 'ENABLE_LOADING'});
    const {data} = await api.fetchPostsBySearch(searchQuery);
    dispatch({type: 'GET_REC_POSTS', payload: data});
    dispatch({type: 'DISABLE_LOADING'});
  } catch (error) {
    dispatch({type: 'GET_REC_POSTS', payload: null});
  }
};

export const getPostsBySearchv2 = searchQuery => async dispatch => {
  try {
    dispatch({type: 'ENABLE_LOADING'});
    const {data} = await api.fetchPostsBySearch(searchQuery);
    dispatch({type: 'GET_REC_POSTS_v2', payload: data});
    dispatch({type: 'DISABLE_LOADING'});
  } catch (error) {
    dispatch({type: 'GET_REC_POSTS_v2', payload: null});
  }
};

export const likePost = id => async dispatch => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log("Likes Issue",error);
    dispatch({ type: 'LIKE', payload: null });
  }
};