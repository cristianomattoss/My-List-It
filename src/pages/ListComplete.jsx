import { useContext, useState } from "react";
import { ListContext } from "../context/listContext";

import "./ListComplete.css";

import List from "../components/List";

import { FaArrowLeft, FaPlus } from "react-icons/fa";

const ListComplete = () => {
  const [state, dispatch] = useContext(ListContext);
  const [products, setProducts] = useState(state.productsList);

  const handleReturn = () => {
    localStorage.setItem(state.listName, JSON.stringify(products));
    dispatch({ type: "START" });
  };

  const handleAddProduct = () => {
    localStorage.setItem(state.listName, JSON.stringify(products));
    dispatch({ type: "ADD-PRODUCT", listName: state.listName });
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
      <button className="return-button" onClick={handleReturn}>
        <FaArrowLeft /> Retornar
      </button>
      <button className="add-product-button" onClick={handleAddProduct}>
        <FaPlus /> Adicionar produto
      </button>
    </div>
  );
};

export default ListComplete;
