import React, { createContext, useState, useEffect, useContext } from 'react';
import { getProductCategories } from '../services/product.service';

const CategoryContext = createContext({});

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProductCategories();
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
