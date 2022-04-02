import { useEffect, useState } from 'react';
import { useAuth } from '../context';
import { getProductCart } from '../services/product.service';

export const useCartAsync = () => {
  const [cart, setCart] = useState([]);
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
          const { data } = await getProductCart();
          setCart(data.cart);
        } catch (error) {
          alert(error);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cart, setCart };
};
