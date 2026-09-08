import { createContext, useReducer } from "react";

const STAGES = ["START", "CREATE-LIST", "VIEW-LIST"]

const listNames = JSON.parse(localStorage.getItem("minhas-listas"))

const initialState = {
    AppStage: STAGES[0],
    listNames: listNames,
    listName: "",
    productsList: [],
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
        listName: "",
        productsList: [],
      }
    case "FINISH-LIST":
    return {
      ...state,
      AppStage: STAGES[0],
      listNames: action.updatedLists,
    };
    case "VIEW-LIST":
    return {
      ...state,
      AppStage: STAGES[STAGES.length - 1],
      listName: action.listName,
      productsList: JSON.parse(localStorage.getItem(action.listName) || "[]")
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