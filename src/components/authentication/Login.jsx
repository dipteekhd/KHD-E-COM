import React from 'react';
import './Authentication.scss';

export const Login = () => {
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
            <a className="btn btn--primary p-xs-vr p-sm-hr m-sm-b rounded-sm bold-font">
              LOGIN
            </a>
            <a className="btn btn--primary-link btn--active semibold-font">
              Create New Account
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};
