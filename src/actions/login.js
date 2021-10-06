import * as api from '../api/index';

export const signin = (formData) => async dispatch => {
  console.log("Incomming Form Data",formData);
  try {
    const {data} = await api.signIn(formData);
    dispatch({type: 'LOGIN', payload: data});
  } catch (error) {
    dispatch({type: 'LOGIN', payload: "Error"});
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
