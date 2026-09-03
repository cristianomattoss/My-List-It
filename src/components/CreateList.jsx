import { use, useContext } from "react"
import { ListContext } from "../context/listContext"

const CreateList = (list, value) => {
    const [state, dispatch] = useContext(ListContext);

  return (
    <div>CreateList</div>
  )
}

export default CreateList