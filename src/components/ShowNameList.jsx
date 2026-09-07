import "./ShowNameList.css"

const ShowNameList = ({listNames}) => {

  return (
    <div className="container-all-name-lists">
        {listNames.map((listName) => (
            <div key={listName} className="container-list-name">
                <div className="card-name">
                    <h2>{listName}</h2>
                    <p>ver lista</p>
                </div>
                <button className="remove">Excluir</button>
            </div>
        ))}
    </div>
  )
}

export default ShowNameList