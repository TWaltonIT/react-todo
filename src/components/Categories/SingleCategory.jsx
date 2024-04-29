import { useAuth } from "../../contexts/AuthContext"
import { useState } from "react"

//FontAwesome Icons
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

//Edit Functionality
import CatEdit from "./CatEdit"
import axios from "axios"

export default function SingleCategory({ category, getCategories }) {
    
    const { catName, catDesc, categoryId } = category

    const { currentUser } = useAuth()

    const [showEdit, setShowEdit] = useState(false);

    const [toDos, setToDos] = useState([]);

    const deleteCat = (id) => {
      
        if(window.confirm(`Are you sure you want to delete ${catName}?`)){
            axios.get(`http://todoapi.thomaswaltondev.com/API/ToDos`).then(t => {
              setToDos(t.data)
            })

        const filteredToDos = toDos.filter(t => t.categoryId === id)
        if(filteredToDos.length > 0) {
          window.alert(`Error! Cannot delete the Category ${catName} because it contains the following ToDos:
          ${filteredToDos.map(t => `\n${t.name}`)}
          \nPlease delete these ToDos or reassign them to a different category before deleting ${catName}. `)
        } else {
          axios.delete(`http://todoapi.thomaswaltondev.com/API/Categories/${id}`).then(getCategories)
        }
    }
  }

  return (
    <tr>
        <td>{catName}</td>
        <td>{catDesc}</td>
        {/* BEGIN EDIT UI */}
        {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
          <td>
            <button onClick={() => setShowEdit(true)} id="editLink" className="m-1 btn btn-primary rounded">
                <FaEdit />
            </button>
            <button onClick={() => deleteCat(categoryId)} id="deleteLink" className="m-1 btn btn-danger rounded">
                <FaTrashAlt />
            </button>
            {showEdit &&
              <CatEdit 
                setShowEdit={setShowEdit}//Tied to closing the modal in CatEdit
                showEdit={showEdit}//Tied to showing the modal (if true, modal is shown) 
                getCategories={getCategories}//Allows us to refresh the table in Categories.jsx
                category={category} />
            }
          </td>
        }
        {/* END EDIT UI */}
    </tr>
  )
}