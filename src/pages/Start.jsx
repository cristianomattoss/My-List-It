import ShowNameList from '../components/ShowNameList';

import { useContext } from 'react';
import { ListContext } from '../context/listContext';

import './Start.css'

import { FaPlus } from "react-icons/fa";

const Start = () => {
    const [state, dispatch] = useContext(ListContext)
    const listNames = state.listNames

  return (
    <div className='container'>
        <div className="container-header">
          <h1>Minhas Listas</h1>
          <button className='start-list' onClick={() => dispatch({type: "CREATE-LIST"})}><FaPlus/> Criar nova lista</button>
        </div>
        <main className="lists-container">
          {listNames.length !== 0
            ? <ShowNameList listNames={listNames} />
            : <p className="empty-message">Nenhuma lista criada</p>
          }
        </main>
    </div>
  )
}

export default Start