import './ToDos.css'
import { useState, useEffect, } from 'react'
import axios from 'axios'
import FilterCat from './FilterCat'
import SingleTodo from './SingleTodo';
import { useAuth } from '../../contexts/AuthContext';
import ToDoCreate from './ToDoCreate';

export default function ToDos() {
  const [toDos, setToDos] = useState([]);
  const [filter, setFilter] = useState(0)
  const { currentUser } = useAuth()
  const [showCreate, setShowCreate] = useState(false);

  const getToDos = () => {
    axios.get(`http://todoapi.thomaswaltondev.com/API/ToDos`).then(response => {
      console.log(response)
      setToDos(response.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, []);

  return (
    <section className="toDos">
        <article id='dashboard' className="bg-secondary p-4">
            <h1 className="text-center">To Do Dashboard</h1>
        </article>
         {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
            <div className="p-2 mb-3 text-center">
                <div className="createContainer">
                    {!showCreate ? 
                      <button onClick={() => setShowCreate(true)} className="btn btn-success">
                          Create New ToDo
                      </button> :
                        <>
                          <button onClick={() => setShowCreate(false)} className="btn btn-danger">
                              Cancel
                          </button>
                          <ToDoCreate setShowCreate={setShowCreate} getToDos={getToDos} />
                        </>
                    }
                </div>
            </div>
        }
        <FilterCat setFilter={setFilter}/>

        <div className="container p-2">
            <table className="table bg-info table-dark my-3" id='todoTable'>
                <thead className="table-secondary text-uppercase">
                    <tr>
                        <th>Done?</th>
                        <th>Task</th>
                        <th>Category</th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* READ UI BEGINS */}
                    {filter === 0 ? toDos.map(t => 
                      <SingleTodo key={t.toDoId} todo={t} getToDos={getToDos}/>    
                    ):
                    toDos.filter(t => t.categoryId === filter).map(t => 
                      <SingleTodo key={t.toDoId} todo={t} />
                    )}
                    
                    {/* READ UI ENDS */}
                </tbody>
            </table>
            {filter !== 0 && toDos.filter(t => t.categoryId === filter).length === 0 &&
              <h2 className="alert alert-warning text-dark">
                There are no results for this category.
              </h2>
            }
        </div>
    </section>
  )
}