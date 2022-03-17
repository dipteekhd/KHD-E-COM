import React from 'react';
import './Authentication.scss';

export const Signup = () => {
  return (
    <main className="authenticate center-content">
      <div className="card rounded-sm">
        <form>
          <div className="card__information p-sm-b">
            <div className="card__primary-info m-sm-all">
              <h3 className="card__title text-center">Signup</h3>
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
              <div className="input-container p-sm-b">
                <label htmlFor="confirm">Confirm Password</label>
                <input
                  id="confirm"
                  name="confirm"
                  className="input-container__auth p-xs-all rounded-sm"
                  type="password"
                  placeholder="Re-Enter Password"
                />
              </div>
            </div>

            <div className="card__secondary-info text-grey-500 m-md-hr">
              <label htmlFor="accept">
                <input id="accept" name="accept" type="checkbox" />
                <span className="m-xs-l">I accept all Terms & Conditions</span>
              </label>
            </div>
          </div>

          <div className="card__action-stack m-sm-all">
            <a className="btn btn--primary p-xs-vr p-sm-hr m-sm-b rounded-sm bold-font">
              CREATE NEW ACCOUNT
            </a>
            <a className="btn btn--primary-link btn--active semibold-font">
              Login
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};
