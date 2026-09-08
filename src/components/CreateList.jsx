import { useState, useContext } from "react"
import { ListContext } from "../context/listContext"
import { FaPlus, FaTrash } from "react-icons/fa";

import "./CreateList.css"

import List from "./List";

const CreateList = () => {
    const [, dispatch] = useContext(ListContext);

    const [listName, setListName] = useState("");
    const [listNameProduct, setListNameProduct] = useState("");
    const [listCreated, setListCreated] = useState(false);
    const [listProducts, setListProducts] = useState([]);

    const changeListName = (e) => {
      setListName(e.target.value);
    };

    const changeProductName = (e) => {
      setListNameProduct(e.target.value);
    };

    const insertName = () => {
      const nomeDasListas = JSON.parse(localStorage.getItem("minhas-listas") || "[]")
      const novoNomeDasListas = [...nomeDasListas, listName]
      localStorage.setItem("minhas-listas", JSON.stringify(novoNomeDasListas))
      setListCreated(true);
    }

    const addProduct = () => {
      const lista = JSON.parse(localStorage.getItem(listName) || "[]")
      const novoProduto = {
        id: lista.length,
        name: listNameProduct
      }
      const novaLista = [...lista, novoProduto]
      localStorage.setItem(listName, JSON.stringify(novaLista))
      setListProducts(novaLista)
      setListNameProduct("")
    }

  return (
    <div className="create-list">
      <div className="text-apresentation">
        <h1>Criar nova lista</h1>
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
              <input type="text" name="name-list" id="name-list" placeholder="Defina o nome de sua lista" value={listName} 
                onChange={(e) => changeListName(e)}
                disabled={listCreated}
              />
            </div>
          </div>
          <div className="product-section">
            <div className="section-description">
              <p htmlFor="name-product">Adicionar produtos</p>
              <p>Digite o nome do produto e adicione à sua lista.</p>
            </div>
            <div className="input-group">
              <input type="text" name="name-product" id="name-product" placeholder="Defina o nome do produto a ser inserido" 
                value={listNameProduct}
                onChange={(e) => changeProductName(e)}
              />
              <button className="add-button" onClick={() => addProduct()}><FaPlus/></button>
            </div>
          </div>
          <p>Adicione pelo menos um produto e adicione à sua lista</p>
        </div>
        <div className="list-preview">
          <div className="preview-header">
            <h2>Sua lista</h2>
            <p>Confira os itens adicionados à sua lista.</p>
          </div>

          <div className="preview-info">
            <span>Quantidade de itens</span>
            <strong>{listProducts.length}</strong>
          </div>

          <List
            list={listName}
          />

          <div className="preview-actions">
            <button
              className="finish-button"
              onClick={() => dispatch({ type: "START" })}
            >
              Concluir lista
            </button>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default CreateList