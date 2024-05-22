import { useState, useEffect } from "react"
import axios from "axios"

export default function FilterToDo({ setFilter }) {
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        axios.get(`http://todoapi.thomaswaltondev.com/API/ToDos`).then(response => {
        setToDos(response.data)
        })
    }, []);

  return (
    <div className="text-center mt-5">
        <button onClick={() => setFilter(0)} className="btn btn-outline-info bg-dark m-1">
            All
        </button>
        {toDos.map(t =>
            <button key={t.toDoId} onClick={() => setFilter(+t.toDoId)} className="btn btn-outline-info bg-dark m-1" >
                Show Completed
            </button>    
        )}
    </div>
  )
}