import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authenticationActions } from "../redux/features/authenticate/authenticateSlice";
import {
  selectAuthenticated,
  selectProfileStatus,
} from "../redux/features/authenticate/authenticateSlice";
import React from "react";

const Auth = () => {
  const isAuthenticated = useSelector(selectAuthenticated);
  const profileStatus = useSelector(selectProfileStatus);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authenticationActions.login());
  };



  const showProfileHandler = () => {
    dispatch(authenticationActions.setProfileStatus(true));
  };

  const hideProfileHandler = () => {
    dispatch(authenticationActions.setProfileStatus(false));
  };
  return (
    <React.Fragment>
      {!isAuthenticated && (
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
      )}
    </React.Fragment>
  );
};

export default Auth;
