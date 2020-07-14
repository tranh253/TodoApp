import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'
import './TodoList.css'
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';


function TodoList ({ todos, toggleTodo, deleteTodo }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div id="modal" className="deleteModal">
            {todos.map(todo =>
            <>
                <div onClick={() => { deleteTodo(todo.id); handleClose();}} className="delete-task-button">
                    <p>Delete this task?</p>
                </div>
                <div onClick={handleClose} className="cancel-button">
                    <p>Cancel</p>
                </div>
            </>
            )}
        </div>
    );
    return (
        <>
        <ul>
            {todos.map(todo =>
                <div className="list">
                    <Todo
                    key={todo.id}
                    {...todo}
                    deleteTodo={deleteTodo}
                    onClick={() => toggleTodo(todo.id)} />
                
                    <DeleteIcon
                    className="delete-button"
                    delete_key={todo.id}
                    {...todo}
                    onClick={handleOpen} />
                </div> 
            )}
        </ul>
        <Modal
        open={open}
        onClose={handleClose}
        >
            {body}
        </Modal>
    </>
    )
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList
