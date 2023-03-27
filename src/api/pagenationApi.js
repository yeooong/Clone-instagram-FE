import axios from 'axios';

export const getPosts = axios.create({
  baseURL: process.env.REACT_APP_IMAGE_JSON_SERVER_URL,
});
