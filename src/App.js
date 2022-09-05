import { React, Fragment } from "react";
import { Counter } from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile"
import { useSelector } from "react-redux";
import { selectAuthenticated } from "./redux/features/authenticate/authenticateSlice";
import { selectProfileStatus } from "./redux/features/authenticate/authenticateSlice";
function App() {
  const isAuthenticated = useSelector(selectAuthenticated);
  const showProfile = useSelector(selectProfileStatus);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {showProfile && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
