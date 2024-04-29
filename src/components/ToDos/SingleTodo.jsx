import axios from "axios";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import ToDoEdit from "./ToDoEdit";

export default function SingleTodo({ todo, getToDos }) {

    const { toDoId, name, done, category, categoryId } = todo;

    const [showEdit, setShowEdit] = useState(false);

    const deleteToDo = (id) => {
        if(window.confirm(`Are you sure you want to delete ${name}?`)){
            axios.delete(`http://todoapi.thomaswaltondev.com/API/ToDos/${id}`).then(getToDos)
        }
    }

    const handleChange = () => {
        let flipDone = {
            toDoId: toDoId,
            name: name,
            done: !done,
            categoryId: categoryId
        }
        axios.put(`http://todoapi.thomaswaltondev.com/API/ToDos/${toDoId}`, flipDone).then(response => {
            console.log(response)
            getToDos()
        })
    }

    return (
        <>
            <tr>
                <td><input type="checkbox" checked={done} onChange={handleChange} /></td>
                <td>{name}</td>
                <td>{category.catName}</td>
                <td><button onClick={() => setShowEdit(true)} id="editLink" className="m-1 btn btn-primary rounded">
                        <FaEdit />
                    </button>
                    <button onClick={() => deleteToDo(toDoId)} id="deleteLink" className="m-1 btn btn-danger rounded">
                        <FaTrashAlt />
                    </button>
                    
                </td>
            </tr>
            {showEdit &&
                <ToDoEdit 
                    showEdit={showEdit}
                    setShowEdit={setShowEdit}
                    todo={todo}
                    getToDos={getToDos}
                 />
            }
        </>
    );
}
