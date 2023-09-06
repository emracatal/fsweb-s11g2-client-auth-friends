import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "../contexts/authContext";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
