import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authContext } from "./contexts/authContext";
import { PrivateRoute } from "./components/PrivateRoute";
function App() {
  const { login, logout } = useContext(authContext);
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">About</Route>
          <Route path="/users">
            <PrivateRoute>
              Users
              <div onClick={logout}>logout</div>
            </PrivateRoute>
          </Route>
          <Route path="/login">
            <div onClick={login}>login</div>
          </Route>
          <Route path="/">Home</Route>
        </Switch>
      </div>
    </div>
  );
}
{
  /* export function PrivateRoute(props) {
  const history = useHistory();

  const handlePrivatePage = () => {
    if (!props.isLoggedIn) {
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    }
  };
  useEffect(() => {
    console.log("PrivateRoute useEffect");
    handlePrivatePage();
  }, []);
  return (
    <div>
      <h1>private route</h1>
      {props.children}
    </div>

  );
} */
}
export default App;
