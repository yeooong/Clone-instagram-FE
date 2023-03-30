import axios from 'axios';

const postApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default postApi;
