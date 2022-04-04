import axios from 'axios';

const getUserToken = () => {
  return localStorage.getItem('userToken');
};

const getProductCategories = () => {
  return axios.get('/api/categories');
};

const getAllProducts = () => {
  return axios.get('/api/products');
};

const getProductCart = () => {
  const encodedToken = getUserToken();
  return axios.get('/api/user/cart', {
    headers: {
      authorization: encodedToken, // passing token as an authorization header
    },
  });
};

const saveProductInCart = (product) => {
  const encodedToken = getUserToken();
  return axios.post(
    '/api/user/cart',
    { product },
    {
      headers: {
        authorization: encodedToken, // passing token as an authorization header
      },
    }
  );
};

const deleteProductFromCart = (productId) => {
  const encodedToken = getUserToken();
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken, // passing token as an authorization header
    },
  });
};

const updateProductQuantity = (productId, actionType) => {
  const encodedToken = getUserToken();
  return axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: actionType,
      },
    },
    {
      headers: {
        authorization: encodedToken, // passing token as an authorization header
      },
    }
  );
};

const getProductWishList = () => {
  const encodedToken = getUserToken();
  return axios.get('/api/user/wishlist', {
    headers: {
      authorization: encodedToken, // passing token as an authorization header
    },
  });
};
const saveProductInWishList = (product) => {
  const encodedToken = getUserToken();
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
  const encodedToken = getUserToken();
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
  saveProductInCart,
  deleteProductFromCart,
  updateProductQuantity,
};
