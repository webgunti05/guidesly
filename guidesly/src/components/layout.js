import React, { useReducer } from "react";
import Header from "./header";
import { UserContext } from "../contexts/UserContext";

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const Layout = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Header />
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default Layout;
