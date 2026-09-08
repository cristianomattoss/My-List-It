import "./ShowNameList.css"

import { useContext } from "react"
import { ListContext } from "../context/listContext"

const ShowNameList = ({listNames}) => {
    const [, dispatch] = useContext(ListContext);

  return (
    <div className="container-all-name-lists">
        {listNames.map((listName) => (
            <div key={listName} className="container-list-name">
                <div className="card-name">
                    <h2>{listName}</h2>
                    <p onClick={() => dispatch({type: "VIEW-LIST", listName: listName})}>ver lista</p>
                </div>
                <button className="remove" onClick={() => dispatch({type: "DELETE-LIST", listName})}>Excluir</button>
            </div>
        ))}
    </div>
  )
}

export default ShowNameList