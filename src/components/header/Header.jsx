import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useProductFilter } from '../../shared/context';
import { useNavigate } from 'react-router-dom';
import { CLEAR_ALL_FILTER } from '../../shared/actions/types';

export const Header = () => {
  const navigate = useNavigate();
  const { dispatch: productFilterDispatch } = useProductFilter();
  const naviagteToHome = (e) => {
    e.preventDefault();
    productFilterDispatch({ type: CLEAR_ALL_FILTER });
    navigate('/');
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
          <a className="button-icon rounded-circle center-content-1 m-sm-r">
            <span className="material-icons material-icons--notification">
              favorite
            </span>
            <span className="icon-badge rounded-circle center-content bold-font">
              0
            </span>
          </a>
          <a className="button-icon rounded-circle center-content-1 m-sm-r">
            <span className="material-icons material-icons--notification">
              shopping_cart
            </span>
            <span className="icon-badge rounded-circle center-content bold-font">
              0
            </span>
          </a>
        </nav>
      </div>

      <Link
        to="/login"
        className="btn btn--primary-outline center-content p-xs-vr p-sm-hr rounded-sm bold-font m-sm-r"
      >
        Login
      </Link>
    </header>
  );
};
