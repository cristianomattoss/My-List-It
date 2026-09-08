import { useState, useContext } from 'react'
import './App.css'

import { ListContext } from './context/listContext';

import CreateList from './pages/CreateList';
import Start from './pages/Start';
import ListComplete from './pages/ListComplete';

function App() {
  const [state] = useContext(ListContext)
  
  return (
    <div>
      {(state.AppStage === "START" && <Start/>)}
      {(state.AppStage === "CREATE-LIST" && <CreateList/>)}
      {state.AppStage === "VIEW-LIST" && <ListComplete />}
    </div>
  )
}

export default App
