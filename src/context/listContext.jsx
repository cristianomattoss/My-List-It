import { createContext, useReducer } from "react";

const STAGES = ["START", "CREATE-LIST", "VIEW-LIST"]

const initialState = {
    AppStage: STAGES[0],
    list: ""
}

const listReducer = (state, action) => {
    
  switch(action.type) {
    case "START":
      return {
        ...state,
        AppStage: STAGES[0],
      };
    case "CREATE-LIST":
      return {
        ...state,
        AppStage: STAGES[1],
      }
    case "VIEW-LIST":
    return {
      ...state,
      AppStage: STAGES[2],
      list: action.list
    };
    default:
      return state;
  }
};

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const value = useReducer(listReducer, initialState);

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};