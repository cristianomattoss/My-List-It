import "./List.css";

import { useContext } from "react";
import { ListContext } from "../context/listContext";

const List = ({list}) => {
  const [state] = useContext(ListContext)

  return (
    <div className="list-container">
      <h1 className="list-complete">{list}</h1>
      {state.productsList.map((product) => (
        <div className="product" key={product.id}>
          <span>{product.name}</span>
        </div>
      ))}
      <p className="remove-list">Excluir</p>
    </div>
  )
}

export default List