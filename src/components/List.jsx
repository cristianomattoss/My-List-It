import "./List.css";

import { useContext } from "react";
import { ListContext } from "../context/listContext";

const List = ({list, value=0}) => {
  const products = JSON.parse(localStorage.getItem(list) || "[]");
  const [, dispatch] = useContext(ListContext)

  return (
    <div className={`list-container ${value === 0 ? "complete" : ""}`}>
      {value !== 0 &&
        <div className='header-list'>
          <p>{list}</p>
          <p onClick={() => dispatch({type: "VIEW-LIST", list: list})}>lista completa</p>
        </div>
      }
      {value === 0 && <h1 className="list-complete">{list}</h1>}
      {(value !== 0 ? products.slice(0, value) : products).map((product) => (
        <div className="product" key={product.id}>
          <span>{product.name}</span>
        </div>
      ))}
      <p className="remove">Excluir</p>
    </div>
  )
}

export default List