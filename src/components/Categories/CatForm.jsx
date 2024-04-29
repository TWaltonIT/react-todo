//This component will house the form for creating AND editing a category
import { Formik, Form, Field } from "formik"
import { catSchema } from "../../utilities/validationSchema"
import axios from "axios"

export default function CatForm({category = '', setShowCreate, getCategories, setShowEdit}) {
    const { catName, catDesc, categoryId } = category || ''

    const handleSubmit = (values) => {
        console.log(values)
        if(!category){
            //If we fall into these scopes, there is NO category prop, so we are in create mode
            //Below, we create a temp object to send in our API POST Request
            const catToCreate = values

            //send the object in a POST request using axios
            axios.post(`http://todoapi.thomaswaltondev.com/API/Categories`, catToCreate).then(() => {
                setShowCreate(false)//this will close the form... passed as a prop from categories.jsx
                getCategories()//This updates the categories table
            })
        } else {
            //If we fall into these scopes, there IS a category prop, so we are in edit mode
            //make the temp object to send in our API PUT request
            const catToEdit = {
                categoryId: categoryId,
                catName: values.catName,
                catDesc: values.catDesc
            }
            //Now we can send the catToEdit in a PUT request to the proper API endpoint (need the id!)
            axios.put(`http://todoapi.thomaswaltondev.com/API/Categories/${categoryId}`, catToEdit).then(() => {
                setShowEdit(false)//This will close the Modal that holds the edit form
                getCategories()//This updates the categories table with the new info
            })
        }
    }

  return (
    <div className="createCategory m-2 text-white text-center">
        <Formik 
            initialValues={{
                //Below is a ternary operator that makes our form behave differently
                //based on whether we have a prop called category (edit mode if true)
                catName: category ? catName : '',
                catDesc: category ? catDesc : '' }}
            validationSchema={catSchema}
            onSubmit={(values) => handleSubmit(values)} >
                {({errors, touched}) => (
                    //The form will be rendered below, passing in errors and touched which are two values we destructure off of the formik component
                    <Form id='catForm' className="row text-center m-auto">
                        <div className="form-group m-1 p-1">
                            <Field name='catName' className='form-control' placeholder='Name' />
                            {/* The errors are conditionally rendered below */}
                            {errors.catName && touched.catName &&
                                <div className="text-danger">{errors.catName}</div>
                            }
                        </div>
                        <div className="form-group m-1 p-1">
                            <Field name='catDesc' className='form-control' placeholder='Description' />
                            {/* The errors are conditionally rendered below */}
                            {errors.catDesc && touched.catDesc &&
                                <div className="text-danger">{errors.catDesc}</div>
                            }
                        </div>
                        <div className="form-group m-1">
                            <button type="submit" className="btn btn-success">Submit Category to API</button>
                        </div>
                    </Form>
                )}
        </Formik>
    </div>
  )
}
