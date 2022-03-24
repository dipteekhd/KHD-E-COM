import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper p-sm-vr">
        <div className="header__title p-sm-hr">
          <Link to="/">
            <h3>E-Commerce</h3>
          </Link>
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

      <a className="btn btn--primary-outline center-content p-xs-vr p-sm-hr rounded-sm bold-font m-sm-r">
        Login
      </a>
    </header>
  );
};
