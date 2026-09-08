import "./List.css";

import { useContext } from "react";
import { ListContext } from "../context/listContext";

import { FaTrash } from "react-icons/fa";

const List = ({ products, complete = false }) => {
  const [state] = useContext(ListContext);

  const productsToShow = products ?? state.productsList;

  return (
    <div className={`list-container ${complete ? "complete" : ""}`}>
      {productsToShow.map((product) => (
        <div className="product" key={product.id}>
          <span className="checkbox"></span>
          <span className="product-name">{product.name}</span>
          <button className="delete-product">
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;