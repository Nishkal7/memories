import axios from 'axios';

// const API = axios.create({ baseURL: "http://localhost:3000" });
const API = axios.create({baseURL: 'https://wishlist-proj.herokuapp.com'});

export const fetchPosts = page => API.get(`/posts?page=${page}`);
