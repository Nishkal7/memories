import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const API = axios.create({baseURL: 'http://10.0.2.2:5000'});
const API = axios.create({baseURL: 'https://wishlist-proj.herokuapp.com'});

// let jsonValue;

// () => {
//   console.log('sssss');
//   jsonValue =  AsyncStorage.getItem('@profile');
// };

API.interceptors.request.use(async req => {
  const jsonValue = await AsyncStorage.getItem('@profile');
  if (jsonValue) {
    req.headers.Authorization = `Bearer ${JSON.parse(jsonValue).token}`;
  }
  return req;
});

export const signIn = formData => API.post('/user/signin', formData);
export const signUp = formData => API.post('/user/signup', formData);
export const fetchPosts = page => API.get(`/posts?page=${page}`);
export const createPost = newPost => API.post('/posts', newPost);
export const fetchPostsBySearch = searchQuery =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${
      searchQuery.tags
    }`,
  );
