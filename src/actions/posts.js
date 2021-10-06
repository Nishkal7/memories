import * as api from "../api/index";

export const getPosts = (page) =>  async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(page);
    dispatch({type: 'GET_POSTS', payload: data});
  } catch (error) {
    dispatch({type: 'GET_POSTS', payload: null});
  }
};