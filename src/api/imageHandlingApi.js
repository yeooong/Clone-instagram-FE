import axios from 'axios';

export const imageTestApi = axios.create({
  baseURL: process.env.REACT_APP_IMAGE_JSON_SERVER_URL,
});
