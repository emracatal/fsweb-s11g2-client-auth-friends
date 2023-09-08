import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { authContext } from "../contexts/authContext";

export function Header() {
  const { logOut, isLoggedIn } = useContext(authContext);
  const history = useHistory();
  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {!isLoggedIn && (
            <button onClick={() => history.push("/login")}>LOGIN</button>
          )}

          {isLoggedIn && (
            <>
              <button onClick={() => history.push("/friends/")}>
                FRIENDLIST
              </button>
              <button onClick={() => history.push("/friends/add")}>
                ADDFRIEND
              </button>
              <button onClick={logOut}>LOGOUT</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
