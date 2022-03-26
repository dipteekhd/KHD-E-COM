import { useEffect, useState } from 'react';
import { getAllProducts } from '../../shared/services/product.service';

export const useProductAsync = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const { data } = await getAllProducts();
        setProducts(data.products);
        setLoader(false);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return { products, loader };
};
