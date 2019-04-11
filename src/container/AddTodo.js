import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

const center = {
  textAlign: 'center',
  margin: '20px'
}
const border = {
  border: '1px solid #333',
  marginRight: '20px'
}

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div style={center}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input style={border} ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)