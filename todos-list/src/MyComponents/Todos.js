import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  let myStyle = {
    minHeight:"60vh"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length === 0? <h3>No Todos Available</h3> : 
      props.todos.map((todo) =>{
        return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          <hr/>
          </> 
        )
      })
    }
      
    </div>
  )
}
