import React from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

const Todo = ({ onClick, completed, text }) => (
    <div onClick={onClick} className="list-todo">
        <div  className="bullet-list"></div>
        <div className="category-tag"></div>
        <li
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                maxWidth: 235
            }}
        >
            <p className="list-content">{text}</p>
        </li>
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
