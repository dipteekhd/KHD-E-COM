import React, { useState } from 'react';
import { login } from '../../shared/services/user.service';
import './Authentication.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useWishList } from '../../shared/context';
import {
  LOG_IN_SUCCESS,
  INITIALIZE_WISH_COUNT,
} from '../../shared/actions/types';

export const Login = () => {
  const [userCredential, setUserCredential] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredential;

  const navigate = useNavigate();

  const { dispatch: authDispatch } = useAuth();
  const { wishListDispatch } = useWishList();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await login(userCredential);
      if (status === 201) alert('Wrong credentials!'); //temp handling
      if (status === 200) {
        const { encodedToken, foundUser } = data;
        localStorage.setItem('userToken', encodedToken);
        localStorage.setItem('userData', JSON.stringify(foundUser));
        authDispatch({
          type: LOG_IN_SUCCESS,
          payload: { userToken: encodedToken, userData: foundUser },
        });
        wishListDispatch({
          type: INITIALIZE_WISH_COUNT,
          totalProductsInwishList: foundUser.wishlist.length,
        });
        navigate(-1);
      }
    } catch (error) {
      if (error.response.status === 404) alert(error.response.data.errors[0]);
      if (error.response.status === 500) alert('Server error');
    }
  };

  return (
    <main className="authenticate center-content">
      <div className="card rounded-sm">
        <form>
          <div className="card__information p-sm-b">
            <div className="card__primary-info m-sm-all">
              <h3 className="card__title text-center">Login</h3>
              <div className="input-container p-sm-b">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  className="input-container__auth p-xs-all rounded-sm"
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) =>
                    setUserCredential((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input-container p-sm-b">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  className="input-container__auth p-xs-all rounded-sm"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) =>
                    setUserCredential((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="card__secondary-info text-grey-500 m-md-hr">
              <label htmlFor="remember">
                <input id="remember" name="remember" type="checkbox" />
                <span className="m-xs-l">Remember me</span>
              </label>
              <a className="btn btn--primary-link btn--active semibold-font">
                Forget Password?
              </a>
            </div>
          </div>

          <div className="card__action-stack m-sm-all">
            <button
              className={`btn ${
                email && password ? 'btn--primary' : 'btn--primary-disabled'
              } p-xs-vr p-sm-hr m-sm-b rounded-sm bold-font`}
              disabled={!email || !password}
              onClick={onLogin}
            >
              LOGIN
            </button>
            <Link
              to="/signup"
              className="btn btn--primary-link btn--active semibold-font"
            >
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
