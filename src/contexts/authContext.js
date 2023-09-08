import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  const axiosWithAuth = () => {
    const token = userLoggedIn.token;
    return axios.create({
      headers: {
        Authorization: token,
      },
    });
  };

  const login = async (username, password) => {
    axios
      .post("http://localhost:9000/api/login", {
        username,
        password,
      })
      .then(function (response) {
        setIsLoggedIn(true);
        setUserLoggedIn(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserLoggedIn(null);

    axiosWithAuth()
      .post("http://localhost:9000/api/logout")
      .then(function (response) {
        setIsLoggedIn(false);
        setUserLoggedIn(null);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    login("workintech", "wecandoit");
  }, []);
  return (
    <authContext.Provider
      value={{ isLoggedIn, userLoggedIn, login, logout, axiosWithAuth }}
    >
      {children}
    </authContext.Provider>
  );
}
