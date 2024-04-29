import Modal from 'react-bootstrap/Modal'
import ToDoForm from './ToDoForm'

export default function ToDoEdit({ showEdit, setShowEdit, todo, getToDos }) {
    const { name } = todo
  
    return (
    <Modal className='todoModal'
    show={showEdit}
    onHide={() => setShowEdit(false)}
    size='lg'>
        <Modal.Header closeButton>
            <h2>Editing {name}</h2>
        </Modal.Header>
        <Modal.Body>
            <ToDoForm setShowEdit={setShowEdit} getToDos={getToDos} todo={todo} />
        </Modal.Body>
    </Modal>
  )
}