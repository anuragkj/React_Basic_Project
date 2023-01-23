import React from 'react'
import {Todos} from './Todos';
import {AddTodo} from './AddTodo';

export const Home = (props) => {
  return (
    <div>
    <AddTodo addTodo={props.addTodo}/>
    <Todos todos={props.todos} onDelete={props.onDelete}/>
    </div>
  )
}