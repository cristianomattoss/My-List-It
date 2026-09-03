import { useState } from 'react'
import './App.css'

function App() {

  const listas = localStorage.getItem("nome_listas");
  
  return (
    <div>
      Minhas Listas
      <button>Criar nova lista</button>
    </div>
  )
}

export default App
