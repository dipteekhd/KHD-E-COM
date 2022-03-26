import axios from 'axios';

const getProductCategories = () => {
  return axios.get('/api/categories');
};

const getAllProducts = () => {
  return axios.get('/api/products');
};

export { getProductCategories, getAllProducts };
