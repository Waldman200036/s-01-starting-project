import classes from "./UserProfile.module.css";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../redux/features/authenticate/authenticateSlice";
export const UserProfile = () => {
  const dispatch = useDispatch();
  const hideProfileHandler = () => {
    dispatch(authenticationActions.setProfileStatus(false));
  };

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <button onClick={hideProfileHandler}>Close</button>
    </main>
  );
};

export default UserProfile;
