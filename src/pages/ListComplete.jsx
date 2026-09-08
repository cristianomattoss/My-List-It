import { useContext } from "react";
import { ListContext } from "../context/listContext";

import "./ListComplete.css"

import List from "../components/List";

const ListComplete = () => {
    const [state, dispatch] = useContext(ListContext);

  return (
    <div className='container'>
        <List list={state.listName}/>
        <button className="return-button" onClick={() => dispatch({ type: "START" })}>Retornar</button>
    </div>
  )
}

export default ListComplete