import { useState, useEffect } from "react"
import { Formik, Field, Form } from "formik"
import { todoSchema } from "../../utilities/validationSchema"
import axios from "axios"

export default function ToDoForm({ todo = '', setShowCreate, getToDos, setShowEdit}) {
    const { toDoId, name, done, categoryId } = todo || ''
    //We get the categories from our API to populate a select list for categoryId in the form
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(`http://todoapi.thomaswaltondev.com/API/Categories`).then(response => {
        setCategories(response.data)
        })
    }, []);

    const handleSubmit = (values) => {
        console.log(values)
        if(!todo){
            //in these scopes, no todo in the props triggers Create mode
            //make a temp object from the values in the form
            const todoToCreate = {
                name: values.name,
                done: false,
                categoryId: values.categoryId
            }

            //Make the POST request with axios
            axios.post(`http://todoapi.thomaswaltondev.com/API/ToDos`, todoToCreate).then(() => {
                setShowCreate(false)//Close the Create form in Resources
                getToDos()//Update the tiles in Resources
            })
            } else {
                const todoToEdit = {
                    toDoId: toDoId,
                    name: values.name,
                    done: done,
                    categoryId: values.categoryId
                }

                axios.put(`http://todoapi.thomaswaltondev.com/API/ToDos/${toDoId}`, todoToEdit).then(() => {
                setShowEdit(false)//This will close the Modal that holds the edit form
                getToDos()//This updates the categories table with the new info
            })
            }
        }
  return (
    <Formik
        initialValues={{
            name: todo ? name : '',
            done: todo ? done : 0,
            categoryId: todo ? categoryId : ''
        }}
        validationSchema={todoSchema}
        onSubmit={(values) => handleSubmit(values)}>
        {/* For simplicity, start with the below structure and add the form to the empty paren
            {({errors, touched}) => ()} */}
        {({errors, touched}) => (
            <Form id="toDoForm">
                <div className="form-group m-3">
                    <Field name='name' className='form-control' placeholder='Name' />
                    {errors.name && touched.name && <div className="text-danger">{errors.name}</div> }
                </div>
                <div className="form-group m-3">
                    <Field as='select'
                        name='categoryId'
                        className='form-control'>
                        <option value='' disabled>
                            [--Please Choose--]
                        </option>
                        {/* Below we map an option for each category in our DB */}
                        {categories.map(cat =>
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.catName}
                            </option>
                        )}
                    </Field>
                </div>
                <div className="form-group m-3">
                    <button type="submit" className="btn btn-success m-3">
                        Submit ToDo to API
                    </button>
                </div>
            </Form>
        )}
    </Formik>
  )
}