import { useState, useEffect } from "react"
import axios from "axios"

export default function FilterCat({ setFilter }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(`http://todoapi.thomaswaltondev.com/API/Categories`).then(response => {
        setCategories(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get(`http://todoapi.thomaswaltondev.com/API/ToDos`).then(response => {
            console.log(response)
        })
    }, []);

  return (
    <div className="text-center mt-5">
        <button onClick={() => setFilter(0)} className="btn btn-outline-warning bg-dark m-1">
            All
        </button>
        {categories.map(c =>
            <button key={c.categoryId} onClick={() => setFilter(+c.categoryId)} id="filter" className="btn btn-outline-warning bg-dark m-1" >
                {c.catName}
            </button>    
        )}
    </div>
  )
}