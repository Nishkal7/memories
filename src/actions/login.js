import * as api from "../api/index";

export const signin = (page) =>  async (dispatch) => {
  try {
    // dispatch({type: START_LOADING});
    const { data } = await api.fetchPosts(page);
    dispatch({type: 'LOGIN', payload: data});
  } catch (error) {
    console.log(error);
  }
};
export const signout = () =>  async (dispatch) => {
  try {
    // dispatch({type: START_LOADING});
    dispatch({type: 'LOGOUT', payload: null});
  } catch (error) {
    console.log(error);
  }
};
