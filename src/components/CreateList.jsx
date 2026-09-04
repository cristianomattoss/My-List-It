import { useState, useContext } from "react"
import { ListContext } from "../context/listContext"

import "./CreateList.css"

const CreateList = () => {
    const [state, dispatch] = useContext(ListContext);

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
    }

  return (
    <div className="create-list">
      <label htmlFor="nome-lista">Nome da lista:</label>
      <div className="create-name">
        <input type="text" name="nome-lista" id="nome-lista" placeholder="Defina o nome de sua lista" value={listName} 
          onChange={(e) => changeListName(e)}
          disabled={listCreated}
        />
        <button className="adicionar" onClick={() => insertName()} disabled={listCreated}>+</button>
      </div>
      <label htmlFor="nome-produto">Produto:</label>
      <div className="create-name">
        <input type="text" name="nome-produto" id="nome-produto" placeholder="Defina o nome do produto a ser inserido" 
          value={listNameProduct}
          onChange={(e) => changeProductName(e)}
        />
        <button className="adicionar" onClick={() => addProduct()}>+</button>
      </div>
      <div className="list-container">
          {listProducts.map((produto) => (
            <p key={produto.id}>{produto.name}</p>
          ))}
      </div>
    </div>
  )
}

export default CreateList