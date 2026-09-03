import { createContext, useReducer } from "react";

const STAGE = ["Start"]

const initialState = {
    AppStage: initialState[0]
}

const listReducer = (state, action) => {
  pass
};

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const value = useReducer(listReducer, initialState);

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};