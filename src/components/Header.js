import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthenticated } from "../redux/features/authenticate/authenticateSlice";
import { selectProfileStatus } from "../redux/features/authenticate/authenticateSlice";
import { authenticationActions } from "../redux/features/authenticate/authenticateSlice";
const Header = () => {
  const isAuthenticated = useSelector(selectAuthenticated);
  const isProfileShowing = useSelector(selectProfileStatus);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
  };
  const showProfileHandler = () => {
    dispatch(authenticationActions.setProfileStatus(true));
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          {isAuthenticated &&
            !isProfileShowing && (
              <li>
                <button onClick={showProfileHandler}>Show Profile</button>
              </li>
            )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
