import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    const headerObj = { authorization: user.token };

    axios
      .post("http://localhost:9000/api/logout", null, {
        headers: headerObj,
      })
      .then(function (response) {
        console.log(response);
        setIsLoggedIn(false);
        setUser(null);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const login = async (username, password) => {
    axios
      .post("http://localhost:9000/api/login", {
        username,
        password,
      })
      .then(function (response) {
        console.log(response);
        isLoggedIn(true);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    login("workintech", "wecandoit");
  }, []);
  return (
    <authContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
