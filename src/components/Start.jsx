import List from './List';

import { useContext } from 'react';
import { ListContext } from '../context/listContext';

import './Start.css'

const Start = () => {
    const listas = JSON.parse(localStorage.getItem("nome_listas") || "[]");
    const [, dispatch] = useContext(ListContext)

  return (
    <div>
        <h1>Minhas Listas</h1>
        <main className='lists-container'>
        {(listas.length !== 0)
          ? listas.map((lista) => (
            <List key={lista.id} list={lista} value={5}></List>
          ))
          : <p className="empty-message">Nenhuma lista criada</p> 
        }
      </main>
      <button onClick={() => dispatch({type: "CREATE-LIST"})}>Criar nova lista</button>
    </div>
  )
}

export default Start