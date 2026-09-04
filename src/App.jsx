import { useState, useContext } from 'react'
import './App.css'

import { ListContext } from './context/listContext';

import CreateList from './components/CreateList';
import Start from './components/Start';
import ListComplete from './components/ListComplete';

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
