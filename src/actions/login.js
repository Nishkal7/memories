import * as api from '../api/index';

export const signin = () => async dispatch => {
  try {
    const {data} = await api.fetchPosts(1);
    dispatch({type: 'LOGIN', payload: data});
  } catch (error) {
    console.log(error);
  }
};
export const signout = () => async dispatch => {
  try {
    dispatch({type: 'LOGOUT', payload: null});
    dispatch({type: 'GET_POSTS', payload: null});
  } catch (error) {
    console.log(error);
  }
};
