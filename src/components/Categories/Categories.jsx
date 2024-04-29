import { useState, useEffect } from "react"
import axios from "axios"
import SingleCategory from "./SingleCategory"
import CatCreate from "./CatCreate"
import { useAuth } from "../../contexts/AuthContext"
import './Categories.css'

export default function Categories() {
    const [categories, setCategories] = useState([])
    const [showCreate, setShowCreate] = useState(false);
    
    const { currentUser } = useAuth()

    const getCategories = () => {
        axios.get(`http://todoapi.thomaswaltondev.com/API/Categories`).then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

  return (
    <section className="categories">
        <article id="dashboard" className="bg-secondary p-5">
            <h1 className="text-center">Categories Dashboard</h1>
        </article>
        {/* BEGIN CREATE UI */}
        {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
            <div className="p-2 mb-3 text-center">
                <div className="createContainer">
                    {!showCreate ? 
                        <button onClick={() => setShowCreate(true)} className="btn btn-success">
                            Create New Category
                        </button> :
                        <>
                        <button onClick={() => setShowCreate(false)} className="btn btn-danger">
                            Cancel
                        </button>
                        <CatCreate setShowCreate={setShowCreate} getCategories={getCategories} />
                        </>
                    }
                </div>
            </div>
        }
        {/* END CREATE UI */}
        <div className="container p-2">
            <table className="table bg-info table-dark my-3" id='catTable'>
                <thead className="table-secondary text-uppercase">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* READ UI BEGINS */}
                    {categories.map(c => 
                        <SingleCategory key={c.categoryId} category={c} getCategories={getCategories}/>    
                    )}
                    {/* READ UI ENDS */}
                </tbody>
            </table>
        </div>
    </section>
  )
}