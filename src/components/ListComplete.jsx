import { useContext } from "react";
import { ListContext } from "../context/listContext";

import "./ListComplete.css"

import List from "./List";

const ListComplete = () => {
    const [state, dispatch] = useContext(ListContext);

  return (
    <div className='container'>
        <List list={state.list} value={0} />
        <button className="return-button" onClick={() => dispatch({ type: "START" })}>Retornar</button>
    </div>
  )
}

export default ListComplete