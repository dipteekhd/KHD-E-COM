import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  useAuth,
  useCart,
  useProductFilter,
  useWishList,
} from '../../shared/context';
import { useNavigate } from 'react-router-dom';
import { CLEAR_ALL_FILTER, LOG_OUT_SUCCESS } from '../../shared/actions/types';

export const Header = () => {
  const navigate = useNavigate();
  const { dispatch: productFilterDispatch } = useProductFilter();
  const { state: authState, dispatch: authDispatch } = useAuth();
  const { wishListState } = useWishList();
  const { cartState } = useCart();

  const naviagteToHome = () => {
    productFilterDispatch({ type: CLEAR_ALL_FILTER });
    navigate('/');
  };

  const navigateToWishList = () => {
    authState.isUserLoggedIn
      ? navigate('/ProductWishList')
      : navigate('/login');
  };

  const navigateToCart = () => {
    authState.isUserLoggedIn ? navigate('/ProductCart') : navigate('/login');
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    navigate('/');
    authDispatch({ type: LOG_OUT_SUCCESS });
  };

  return (
    <header className="header">
      <div className="header__wrapper p-sm-vr">
        <div className="header__title p-sm-hr">
          <a
            className="btn btn--primary-link btn--active semibold-font"
            onClick={naviagteToHome}
          >
            <h3>E-Commerce</h3>
          </a>
        </div>

        <nav className="header__action">
          <button
            onClick={navigateToWishList}
            className="button-icon rounded-circle center-content-1 m-sm-r"
          >
            <span className="material-icons material-icons--notification">
              favorite
            </span>
            <span className="icon-badge rounded-circle center-content bold-font">
              {authState.isUserLoggedIn
                ? wishListState.totalProductsInwishList
                : 0}
            </span>
          </button>
          <button
            onClick={navigateToCart}
            className="button-icon rounded-circle center-content-1 m-sm-r"
          >
            <span className="material-icons material-icons--notification">
              shopping_cart
            </span>
            <span className="icon-badge rounded-circle center-content bold-font">
              {authState.isUserLoggedIn ? cartState.totalProductsInCart : 0}
            </span>
          </button>
        </nav>
      </div>
      {!authState.isUserLoggedIn ? (
        <Link
          to="/login"
          className="btn btn--primary-outline center-content p-xs-vr p-sm-hr rounded-sm bold-font m-sm-r"
        >
          Login
        </Link>
      ) : (
        <>
          <h4 className="m-xs-r">
            Welcome {authState.userData.firstName + authState.userData.lastName}
          </h4>
          <button
            className="btn btn--primary-outline center-content p-xs-vr p-sm-hr rounded-sm bold-font m-sm-r"
            onClick={logout}
          >
            Logout
          </button>
        </>
      )}
    </header>
  );
};
