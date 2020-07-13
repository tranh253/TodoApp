import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import './AddTodo.css'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input placeholder="☐ What’s needed to be done?" ref={node => input = node} />
            </form>
        </div>
    )
}

export default connect()(AddTodo)
