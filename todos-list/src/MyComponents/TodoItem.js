import React from 'react'

export const TodoItem = (props) => {
  return (
    <div className='my-3'>
      <h4>{props.todo.sno}</h4>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}
