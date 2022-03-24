import { useEffect, useState } from 'react';
import axios from 'axios';

export const useProductAsync = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const { data } = await axios.get('/api/products');
        setProducts(data.products);
        setLoader(false);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return { products, loader };
};
