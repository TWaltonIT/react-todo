import * as Yup from 'yup'

const catSchema = Yup.object().shape({
    //Below we call to each property that will need to be validated and use Yup to define the 
    //requirements for each property (required, maxLength, etc.)
    catName: Yup.string().max(25, 'Max 25 characters').required('Category name is required!'),
    catDesc: Yup.string().max(100, 'Max 50 characters')
})

const todoSchema = Yup.object().shape({
    name: Yup.string().max(100, 'Max 100 characters').required(),
    done: Yup.bool().required(),
    categoryId: Yup.number().required()
})

export { catSchema, todoSchema }