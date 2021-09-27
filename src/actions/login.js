export const login = async (dispatch) => {
  try {
    // dispatch({type: START_LOADING});
    // const {data} = await api.fetchPost(id);
    dispatch({type: 'LOGIN', payload: 'USER CAN LOGIN NOW!!'});
  } catch (error) {
    console.log(error);
  }
};
