import { useState, useContext } from 'react'
import './App.css'

import { ListContext } from './context/listContext';
import List from './components/List';

function App() {
  const [state, dispatch] = useContext(ListContext)

  const listas = JSON.parse(localStorage.getItem("nome_listas") || "[]");
  
  return (
    <div>
      <h1>Minhas Listas</h1>
      <main className='lists-container'>
        {(state.AppStage === "Start" && listas.length !== 0)
          ? listas.map((lista) => (
            <List key={lista.id} list={lista} value={5}></List>
          ))
          : <p className="empty-message">Nenhuma lista criada</p> 
        }
      </main>
      <button>Criar nova lista</button>
    </div>
  )
}

export default App
