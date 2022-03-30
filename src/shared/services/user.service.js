import axios from 'axios';

const login = (userCredential) => {
  return axios.post('/api/auth/login', userCredential);
};

export { login };
