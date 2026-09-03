import { createContext, useReducer } from "react";

const STAGES = ["START", "CREATE-LIST"]

const initialState = {
    AppStage: STAGES[0]
}

const listReducer = (state, action) => {
    console.log("action:", action);
    
  switch(action.type) {
    case "CREATE-LIST":
      return {
        ...state,
        AppStage: STAGES[1],
      }
    default:
      return state;
  }
};

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const value = useReducer(listReducer, initialState);

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};