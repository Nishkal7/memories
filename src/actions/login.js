import * as api from '../api/index';

export const signin = formData => async dispatch => {
  try {
    const {data} = await api.signIn(formData);
    dispatch({type: 'LOGIN', payload: data});
  } catch (error) {
    dispatch({type: 'LOGIN', payload: 'Error'});
  }
};
export const signup = formData => async dispatch => {
  try {
    const {data} = await api.signUp(formData);
    dispatch({type: 'LOGIN', payload: data});
  } catch (error) {
    dispatch({type: 'LOGIN', payload: 'Error'});
  }
};
export const signout = () => async dispatch => {
  try {
    dispatch({type: 'LOGOUT', payload: null});
    dispatch({type: 'GET_POSTS', payload: null});
  } catch (error) {
    dispatch({type: 'LOGOUT', payload: null});
    dispatch({type: 'GET_POSTS', payload: null});
  }
};
