import "./List.css";

import { useContext } from "react";
import { ListContext } from "../context/listContext";

import { FaTrash } from "react-icons/fa";

const List = ({ products, setProducts, complete = false }) => {
  const [state] = useContext(ListContext);

  const productsToShow = products ?? state.productsList;

  const handleCheck = (id) => {
    const updatedProducts = products.map((product) => product.id === id ? { ...product, checked: !product.checked }: product );
    setProducts(updatedProducts);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id)
    setProducts(updatedProducts)
  }

  return (
    <div className={`list-container ${complete ? "complete" : ""}`}>
      {productsToShow.map((product) => (
        <div className="product" key={product.id}>
          <input type="checkbox" checked={product.checked} onChange={() => handleCheck(product.id)}/>
          <span className="product-name">{product.name}</span>
          <button className="delete-product" onClick={() => removeProduct(product.id)}>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;