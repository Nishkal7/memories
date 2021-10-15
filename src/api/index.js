import axios from 'axios';

// const API = axios.create({ baseURL: "http://localhost:3000" });
const API = axios.create({baseURL: 'https://wishlist-proj.herokuapp.com'});

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const fetchPosts = page => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
