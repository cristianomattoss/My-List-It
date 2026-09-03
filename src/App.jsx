import { useState, useContext } from 'react'
import './App.css'

import { ListContext } from './context/listContext';

import CreateList from './components/CreateList';
import Start from './components/Start';

function App() {
  const [state] = useContext(ListContext)
  
  return (
    <div>
      {(state.AppStage === "START" && <Start/>)}
      {(state.AppStage === "CREATE-LIST" && <CreateList/>)}
    </div>
  )
}

export default App
