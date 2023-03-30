import axios from 'axios';

const postApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});



export default postApi;
