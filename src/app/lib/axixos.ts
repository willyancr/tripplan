import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-nodejs-tripplan.onrender.com',
  // baseURL: 'http://localhost:3333',
});
