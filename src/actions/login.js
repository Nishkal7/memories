import * as api from '../api/index';

export const signin = formData => async dispatch => {
  let transformedFormData = {
    email: formData.email.toLowerCase(),
    password: formData.password,
  };
  try {
    const {data} = await api.signIn(transformedFormData);
    dispatch({type: 'LOGIN', payload: data});
  } catch (error) {
    dispatch({type: 'LOGIN', payload: 'Error'});
  }
};
export const signup = formData => async dispatch => {
  let transformedFormData = {
    ...formData,
    email: formData.email.toLowerCase(),
  };
  try {
    const {data} = await api.signUp(transformedFormData);
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
