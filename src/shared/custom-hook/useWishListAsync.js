import { useEffect, useState } from 'react';
import { getProductWishList } from '../services/product.service';
import { useAuth } from '../context';

export const useWishListAsync = () => {
  const [wishList, setWishList] = useState([]);
  const [loader, setLoader] = useState(false);

  const { state: authState } = useAuth();

  useEffect(() => {
    if (!authState.isUserLoggedIn) {
      setWishList([]);
    }
  }, [authState]);

  useEffect(() => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          setLoader(true);
          const { data } = await getProductWishList();
          setWishList(data.wishlist);
          setLoader(false);
        } catch (error) {
          alert(error);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { wishList, setWishList, loader };
};
