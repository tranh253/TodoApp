import React from 'react'
import PropTypes from 'prop-types'
import './Todo.css'
import { deleteTodo } from '../../actions'
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({ onClick, completed, text }) => (
    <div className="list-todo">
        <div className="bullet-list"></div>
        <div className="category-tag"></div>
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <p className="list-content">{text}</p>
        </li>
        <div><DeleteIcon className="delete-button" onClick={deleteTodo} /></div>
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
