import { useContext, useState } from "react";
import { ListContext } from "../context/listContext";

import "./ListComplete.css"

import List from "../components/List";

import { FaArrowLeft } from "react-icons/fa";

const ListComplete = () => {
  const [state, dispatch] = useContext(ListContext);
  const [products, setProducts] = useState(state.productsList);

  const handleReturn = () => {
    localStorage.setItem(state.listName, JSON.stringify(products));
    dispatch({type: "START"});
  };

  return (
    <div className="container">
      <div className="complete-header">
        <h1>{state.listName}</h1>
        <p>Confira os produtos da sua lista.</p>
      </div>

      <div className="list">
        <List products={products} setProducts={setProducts} complete />
      </div>
      <button className="return-button" onClick={handleReturn}><FaArrowLeft /> Retornar</button>
    </div>
  )
}

export default ListComplete