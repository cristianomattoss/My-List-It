import List from './List';

import { useContext } from 'react';
import { ListContext } from '../context/listContext';

import './Start.css'

const Start = () => {
    const listNames = JSON.parse(localStorage.getItem("minhas-listas") || "[]");
    const [, dispatch] = useContext(ListContext)

  return (
    <div className='container'>
        <h1>Minhas Listas</h1>
        <main className='lists-container'>
        {(listNames.length !== 0)
          ? listNames.map((lista) => (
            <List key={lista} list={lista} value={5}></List>
          ))
          : <p className="empty-message">Nenhuma lista criada</p> 
        }
      </main>
      <button className='start-list' onClick={() => dispatch({type: "CREATE-LIST"})}>Criar nova lista</button>
    </div>
  )
}

export default Start