import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../redux/features/authenticate/authenticateSlice";

import React from "react";

const Auth = () => {

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authenticationActions.login());
  };


  return (
    <React.Fragment>
        <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button onClick={loginHandler}>Login</button>
            </form>
          </section>
        </main>
    </React.Fragment>
  );
};

export default Auth;
