import { useState, useContext, useEffect } from "react";
import { ListContext } from "../context/listContext";
import { FaListUl, FaCheck, FaPlus } from "react-icons/fa";

import "./CreateList.css";

import List from "../components/List";

const CreateList = () => {
  const [state, dispatch] = useContext(ListContext);

  const [listName, setListName] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    if (state.listName !== "") {
      setListName(state.listName);
      setListProducts(state.productsList);
    }
  }, [state.listName, state.productsList]);

  const changeListName = (e) => {
    setListName(e.target.value);
  };

  const changeProductName = (e) => {
    setNameProduct(e.target.value);
  };

  const addProduct = () => {
    const newProduto = {
      id: listProducts.length,
      name: nameProduct,
      checked: false,
    };

    setListProducts([...listProducts, newProduto]);
    setNameProduct("");
  };

  function finishList() {
    let updatedLists;

    if (state.listNames.includes(state.listName)) {
      updatedLists = state.listNames.map((name) =>
        name === state.listName ? listName : name,
      );
      if (state.listName !== listName) {
        localStorage.removeItem(state.listName);
      }
    } else {
      updatedLists = [...state.listNames, listName];
    }

    localStorage.setItem("minhas-listas", JSON.stringify(updatedLists));
    localStorage.setItem(listName, JSON.stringify(listProducts));

    dispatch({ type: "FINISH-LIST", updatedLists });
  }

  return (
    <div className="create-list">
      <div className="text-apresentation">
        <h1>
          {state.listName !== "" ? "Adicionar produto" : "Criar nova lista"}
        </h1>
        <p>Organize suas compras de forma simples e rápida.</p>
      </div>

      <div className="create-list-content">
        {/* Forms */}
        <div className="form-section">
          <div className="list-name-section">
            <div className="section-description">
              <p htmlFor="name-list">Nome da lista</p>
              <p>Dê um nome para a sua lista.</p>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="name-list"
                id="name-list"
                placeholder="Defina o nome de sua lista"
                value={listName}
                onChange={(e) => changeListName(e)}
              />
            </div>
          </div>
          <div className="product-section">
            <div className="section-description">
              <p htmlFor="name-product">Adicionar produtos</p>
              <p>Digite o nome do produto e adicione à sua lista.</p>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="name-product"
                id="name-product"
                placeholder="Defina o nome do produto a ser inserido"
                value={nameProduct}
                onChange={(e) => changeProductName(e)}
              />
              <button className="add-button" onClick={() => addProduct()}>
                <FaPlus />
              </button>
            </div>
          </div>
          <p>Adicione pelo menos um produto e adicione à sua lista</p>
        </div>
        <div className="list-preview">
          <div className="preview-header">
            <div>
              <h2>Sua lista</h2>
              <p>Confira os produtos adicionados.</p>
            </div>

            <span className="item-count">{listProducts.length} itens</span>
          </div>

          <div className="preview-list">
            <div className="preview-list-header">
              <FaListUl />
              <h3>{listName}</h3>
            </div>

            <div className="preview-products">
              <List products={listProducts} setProducts={setListProducts} />
            </div>
          </div>

          <div className="preview-actions">
            <button
              className="cancel-button"
              onClick={() => dispatch({ type: "START" })}
            >
              Cancelar
            </button>

            <button className="finish-button" onClick={finishList}>
              <FaCheck />
              Concluir lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateList;
