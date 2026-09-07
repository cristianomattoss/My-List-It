import "./List.css";

import { useContext } from "react";
import { ListContext } from "../context/listContext";

const List = ({list}) => {
  const products = JSON.parse(localStorage.getItem(list) || "[]");
  const [, dispatch] = useContext(ListContext)

  return (
    <div className={`list-container ${value === 0 ? "complete" : ""}`}>
      <h1 className="list-complete">{list}</h1>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <span>{product.name}</span>
        </div>
      ))}
      <p className="remove">Excluir</p>
    </div>
  )
}

export default List