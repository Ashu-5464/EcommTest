import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lakestorcapi.com/tlocs'
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const login = async (username, password) => {
  const response = await api.post('/login', { username, password });
  return response.data;
};
