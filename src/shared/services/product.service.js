import axios from 'axios';

const getProductCategories = () => {
  return axios.get('/api/categories');
};

const getAllProducts = () => {
  return axios.get('/api/products');
};

const getProductCart = () => {
  return axios.get('/api/user/cart');
};

const getProductWishList = () => {
  const encodedToken = localStorage.getItem('userToken');
  return axios.get('/api/user/wishlist', {
    headers: {
      authorization: encodedToken, // passing token as an authorization header
    },
  });
};
const saveProductInWishList = (product) => {
  const encodedToken = localStorage.getItem('userToken');
  return axios.post(
    '/api/user/wishlist',
    { product },
    {
      headers: {
        authorization: encodedToken, // passing token as an authorization header
      },
    }
  );
};

const deleteProductFromWishList = (productId) => {
  const encodedToken = localStorage.getItem('userToken');
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken, // passing token as an authorization header
    },
  });
};

export {
  getProductCategories,
  getAllProducts,
  getProductCart,
  saveProductInWishList,
  deleteProductFromWishList,
  getProductWishList,
};
