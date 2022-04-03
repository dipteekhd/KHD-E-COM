import { useEffect, useState } from 'react';
import { useAuth } from '../context';
import { getProductCart } from '../services/product.service';

export const useCartAsync = () => {
  const [cart, setCart] = useState([]);
  const [loader, setLoader] = useState(false);
  const { state: authState } = useAuth();

  useEffect(() => {
    if (!authState.isUserLoggedIn) {
      setCart([]);
    }
  }, [authState]);

  useEffect(() => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          setLoader(true);
          const { data } = await getProductCart();
          setCart(data.cart);
          setLoader(false);
        } catch (error) {
          alert(error);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cart, setCart, loader };
};
