import "./List.css";

const List = ({list, value=0}) => {
  const products = JSON.parse(localStorage.getItem(list) || "[]");

  return (
    <div className="list-container">
      {value !== 0 &&
        <div className='header-list'>
          <p>{list}</p>
          <p>lista completa</p>
        </div>
      }
      {(value !== 0 ? products.slice(0, value) : products).map((product) => (
        <div className="product" key={product.id}>
          <span>{product.name}</span>
        </div>
      ))}
      <p className="remove">Excluir</p>
    </div>
  )
}

export default List