import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CategoryContext = createContext({});

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/api/categories');
        setCategories(data.categories);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
